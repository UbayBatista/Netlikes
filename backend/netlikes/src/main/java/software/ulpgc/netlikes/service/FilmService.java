package software.ulpgc.netlikes.service;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;

import software.ulpgc.netlikes.model.Film;
import software.ulpgc.netlikes.model.Genre;
import software.ulpgc.netlikes.model.Platform;
import software.ulpgc.netlikes.model.Actor;

import software.ulpgc.netlikes.repository.FilmRepository;
import software.ulpgc.netlikes.repository.GenreRepository;
import software.ulpgc.netlikes.repository.PlatformRepository;
import software.ulpgc.netlikes.repository.ActorRepository;

import software.ulpgc.netlikes.dto.FilmRequestDTO;
import software.ulpgc.netlikes.dto.FilmResponseDTO;

@Service
@RequiredArgsConstructor
public class FilmService {

    private final FilmRepository filmRepository;
    private final GenreRepository genreRepository;
    private final PlatformRepository platformRepository;
    private final ActorRepository actorRepository;

    public List<FilmResponseDTO> getAllFilms() {
        return filmRepository.findAll()
                .stream()
                .map(this::toDTO)
                .toList();
    }

    public FilmResponseDTO getFilmById(Integer id) {
        Film film = filmRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Film not found"));
        return toDTO(film);
    }

    public FilmResponseDTO saveFilm(FilmRequestDTO dto) {

        Film film = new Film();
        applyDtoToEntity(dto, film);

        filmRepository.save(film);
        return toDTO(film);
    }

    public FilmResponseDTO updateFilm(Integer id, FilmRequestDTO dto) {

        Film film = filmRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Film not found"));

        applyDtoToEntity(dto, film);

        filmRepository.save(film);
        return toDTO(film);
    }

    public void deleteFilm(Integer id) {
        filmRepository.deleteById(id);
    }

    private void applyDtoToEntity(FilmRequestDTO dto, Film film) {
        film.setAdult(dto.isAdult());
        film.setTitle(dto.getTitle());
        film.setFilmUrl(dto.getFilmUrl());
        film.setSummary(dto.getSummary());
        film.setReleaseDate(dto.getReleaseDate());
        film.setTrailer(dto.getTrailer());

        List<Genre> genres = dto.getGenres().entrySet().stream()
            .map(entry -> genreRepository.findById(entry.getKey())
                .orElseGet(() -> {
                    Genre newGenre = new Genre();
                    newGenre.setId(entry.getKey());
                    newGenre.setName(entry.getValue());
                    return genreRepository.save(newGenre);
                })
            )
            .toList();

        film.setGenres(genres);

        List<Platform> platforms = dto.getPlatforms().entrySet().stream()
            .map(entry -> platformRepository.findById(entry.getKey())
                .orElseGet(() -> {
                    Platform newPlatform = new Platform();
                    newPlatform.setId(entry.getKey());
                    newPlatform.setName(entry.getValue());
                    return platformRepository.save(newPlatform);
                })
            )
            .toList();
        film.setPlatforms(platforms);

        List<Actor> actors = dto.getPlatforms().entrySet().stream()
            .map(entry -> actorRepository.findById(entry.getKey())
                .orElseGet(() -> {
                    Actor newActor = new Actor();
                    newActor.setId(entry.getKey());
                    newActor.setName(entry.getValue());
                    return actorRepository.save(newActor);
                })
            )
            .toList();
        film.setParticipateIn(actors);
    }


    private FilmResponseDTO toDTO(Film film) {

        FilmResponseDTO dto = new FilmResponseDTO();

        dto.setId(film.getId());
        dto.setAdult(film.isAdult());
        dto.setTitle(film.getTitle());
        dto.setFilmUrl(film.getFilmUrl());
        dto.setSummary(film.getSummary());
        dto.setReleaseDate(film.getReleaseDate());
        dto.setTrailer(film.getTrailer());

        dto.setGenres(film.getGenres().stream().map(Genre::getName).toList());
        dto.setPlatforms(film.getPlatforms().stream().map(Platform::getName).toList());
        dto.setActors(film.getParticipateIn().stream().map(Actor::getName).toList());

        return dto;
    }
}
