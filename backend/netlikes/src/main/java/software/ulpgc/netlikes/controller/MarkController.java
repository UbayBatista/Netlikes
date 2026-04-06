package software.ulpgc.netlikes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Film;
import software.ulpgc.netlikes.model.Mark;
import software.ulpgc.netlikes.service.FilmService;
import software.ulpgc.netlikes.service.MarkService;
import lombok.RequiredArgsConstructor;
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
            @RequestBody String type) {
            
        return markService.typeFilm(email, filmId, type);
    }

    @DeleteMapping("/{email}/mark/{filmId}")
    public void deleteRelation(@PathVariable String email, @PathVariable Integer filmId) {
        markService.deletetype(email, filmId);
    }

}