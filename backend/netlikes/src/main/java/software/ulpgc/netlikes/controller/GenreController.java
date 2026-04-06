package software.ulpgc.netlikes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Genre;
import software.ulpgc.netlikes.service.GenreService;
import java.util.List;

@RestController
@RequestMapping("/genres")
public class GenreController {

    @Autowired
    private GenreService genreService;

    @GetMapping
    public List<Genre> getAllGenres() {
        return genreService.getAllGenres();
    }

    @GetMapping("/{id}")
    public Genre getGenreById(@PathVariable Integer id) {
        return genreService.getGenreById(id);
    }

    @PostMapping
    public Genre saveGenre(@RequestBody Genre genre) {
        return genreService.saveGenre(genre);
    }

    @PutMapping("/{id}")
    public Genre updateGenre(@PathVariable Integer id, @RequestBody Genre genre) {
        return genreService.updateGenre(id, genre);
    }

    @DeleteMapping("/{id}")
    public void deleteGenre(@PathVariable Integer id) {
        genreService.deleteGenre(id);
    }
}
