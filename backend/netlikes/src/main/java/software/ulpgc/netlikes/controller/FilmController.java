package software.ulpgc.netlikes.controller;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import java.util.List;

import software.ulpgc.netlikes.service.FilmService;

import software.ulpgc.netlikes.dto.FilmRequestDTO;
import software.ulpgc.netlikes.dto.FilmResponseDTO;

@RestController
@RequestMapping("/films")
@RequiredArgsConstructor
public class FilmController {

    private final FilmService filmService;

    @GetMapping
    public List<FilmResponseDTO> getAllFilms() {
        return filmService.getAllFilms();
    }

    @PostMapping
    public FilmResponseDTO saveFilm(@RequestBody FilmRequestDTO dto) {
        return filmService.saveFilm(dto);
    }

    @GetMapping("/{id}")
    public FilmResponseDTO getFilmById(@PathVariable Integer id) {
        return filmService.getFilmById(id);
    }

    @PutMapping("/{id}")
    public FilmResponseDTO updateFilm(@PathVariable Integer id, @RequestBody FilmRequestDTO dto) {
        return filmService.updateFilm(id, dto);
    }

    @DeleteMapping("/{id}")
    public void deleteFilm(@PathVariable Integer id) {
        filmService.deleteFilm(id);
    }
}
