package software.ulpgc.netlikes.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Mark;
import software.ulpgc.netlikes.model.MarkId;
import software.ulpgc.netlikes.service.MarkService;
import lombok.RequiredArgsConstructor;
import software.ulpgc.netlikes.model.Film;
import java.util.List;


@RestController
@RequestMapping("/marks")
@RequiredArgsConstructor

public class MarkController {

    private final MarkService markService;

    @PostMapping("/{email}/mark/{filmId}")
    public Mark typePelicula(
            @PathVariable String email, 
            @PathVariable Integer filmId, 
            @RequestBody Mark.Type type) {
            
        return markService.typeFilm(email, filmId, type);
    }

    @DeleteMapping("/{email}/mark/{filmId}")
    public void deleteRelation(@PathVariable String email, @PathVariable Integer filmId) {
        markService.deletetype(email, filmId);
    }

    @PostMapping("/{email}/toggle/{filmId}")
    public ResponseEntity<?> toggleMark(
            @PathVariable String email, 
            @PathVariable Integer filmId, 
            @RequestParam Mark.Type type) {
        
        if (markService.exists(email, filmId)) {
            markService.deletetype(email, filmId);
            return ResponseEntity.ok("{\"status\": \"removed\"}");
        } else {
            markService.typeFilm(email, filmId, type);
            return ResponseEntity.ok("{\"status\": \"added\"}");
        }
    }

    @GetMapping("/{email}/films")
    public ResponseEntity<List<Film>> getMarkedFilms(
            @PathVariable String email, 
            @RequestParam Mark.Type type) {
        return ResponseEntity.ok(markService.getFilmsByMarkType(email, type));
    }
}