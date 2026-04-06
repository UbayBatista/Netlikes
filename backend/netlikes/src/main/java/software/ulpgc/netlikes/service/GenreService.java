package software.ulpgc.netlikes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.ulpgc.netlikes.model.Genre;
import software.ulpgc.netlikes.repository.GenreRepository;
import java.util.List;

@Service
public class GenreService {
    @Autowired
    private GenreRepository genreRepository;

    public List<Genre> getAllGenres() {
        return genreRepository.findAll();
    }

    public Genre getGenreById(Integer id) {
        return genreRepository.findById(id).orElse(null);
    }

    public Genre saveGenre(Genre genre) {
        return genreRepository.save(genre);
    }

    public Genre updateGenre(Integer id, Genre updatedGenre) {
        return genreRepository.findById(id)
                .map(genre -> {
                    genre.setName(updatedGenre.getName());
                    return genreRepository.save(genre);
                })
                .orElse(null);
    }

    public void deleteGenre(Integer id) {
        genreRepository.deleteById(id);
    }
}

