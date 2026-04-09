package software.ulpgc.netlikes.service;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

import java.util.List;

import software.ulpgc.netlikes.model.Film;
import software.ulpgc.netlikes.model.Genre;
import software.ulpgc.netlikes.model.Platform;
import software.ulpgc.netlikes.model.Video;
import software.ulpgc.netlikes.model.Actor;

import software.ulpgc.netlikes.repository.FilmRepository;
import software.ulpgc.netlikes.repository.GenreRepository;
import software.ulpgc.netlikes.repository.PlatformRepository;
import software.ulpgc.netlikes.repository.ActorRepository;
import software.ulpgc.netlikes.repository.VideoRepository;

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
        film.setId(dto.getId());
        film.setTitle(dto.getTitle());
        film.setOverView(dto.getOverView());
        film.setAdult(dto.isAdult());
        film.setAgeRating(dto.getAgeRating());
        film.setTagLine(dto.getTagline());
        film.setRuntime(dto.getRuntime());
        film.setReleaseDate(dto.getReleaseDate());
        film.setPosterPath(dto.getPosterPath());

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

        List<Platform> platforms = dto.getWatchProviders().stream()
            .map(entry -> platformRepository.findById(Integer.parseInt(entry.get("id")))
                .orElseGet(() -> {
                    Platform newPlatform = new Platform();
                    newPlatform.setId(Integer.parseInt(entry.get("id")));
                    newPlatform.setName(entry.get("name"));
                    newPlatform.setLogo(entry.get("logoPath"));
                    return platformRepository.save(newPlatform);
                })
            )
            .toList();
        film.setWatchProviders(platforms);

        List<Actor> actors = dto.getCast().stream()
            .map(entry -> actorRepository.findById(Integer.parseInt(entry.get("id")))
                .orElseGet(() -> {
                    Actor newActor = new Actor();
                    newActor.setId(Integer.parseInt(entry.get("id")));
                    newActor.setName(entry.get("name"));
                    newActor.setProfilePath(entry.get("profilePath"));
                    return actorRepository.save(newActor);
                })
            )
            .toList();
        film.setCast(actors);

        List<Video> videos = dto.getVideos().stream()
            .map(entry -> {
                Video video = new Video();
                video.setId(entry.get("id"));
                video.setName(entry.get("name"));
                video.setKey(entry.get("key"));
                video.setType(entry.get("type"));
                video.setSite(entry.get("site"));
                video.setFilm(film);
                return video;
            })
            .toList();
        film.setVideos(videos);
    }


    private FilmResponseDTO toDTO(Film film) {

        FilmResponseDTO dto = new FilmResponseDTO();

        dto.setId(film.getId());
        dto.setAdult(film.isAdult());
        dto.setTitle(film.getTitle());
        dto.setPosterPath(film.getPosterPath());
        dto.setOverView(film.getOverView());
        dto.setReleaseDate(film.getReleaseDate());
        
        dto.setGenres(film.getGenres().stream().map(Genre::getName).toList());
        dto.setWatchProviders(film.getWatchProviders().stream().map(Platform::getName).toList());
        dto.setActors(film.getCast().stream().map(Actor::getName).toList());
        dto.setVideos(film.getVideos().stream().map(Video::getName).toList());

        return dto;
    }
}
