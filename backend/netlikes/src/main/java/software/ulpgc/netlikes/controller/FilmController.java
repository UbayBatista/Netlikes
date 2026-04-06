package software.ulpgc.netlikes.controller;

import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Film;
import software.ulpgc.netlikes.service.FilmService;
import lombok.RequiredArgsConstructor;
import java.util.List;

@RestController
@RequestMapping("/films")
@RequiredArgsConstructor
public class FilmController {

    private final FilmService filmService;

    @GetMapping
    public List<Film> getAllFilms() {
        return filmService.getAllFilms();
    }

    @PostMapping
    public Film saveFilm(@RequestBody Film film) {
        return filmService.saveFilm(film);
    }

    @GetMapping("/{id}")
    public Film getFilmById(@PathVariable Integer id) {
        return filmService.getFilmById(id);
    }

    @PutMapping("/{id}")
    public Film updateFilm(@PathVariable Integer id, @RequestBody Film film) {
        return filmService.updateFilm(id, film);
    }

    @DeleteMapping("/{id}")
    public void deleteFilm(@PathVariable Integer id) {
        filmService.deleteFilm(id);
    }
}