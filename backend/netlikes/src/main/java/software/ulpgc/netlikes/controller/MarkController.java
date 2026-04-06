package software.ulpgc.netlikes.controller;

import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Mark;
import software.ulpgc.netlikes.service.MarkService;
import lombok.RequiredArgsConstructor;


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