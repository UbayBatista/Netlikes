package software.ulpgc.netlikes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Actor;
import software.ulpgc.netlikes.service.ActorService;
import java.util.List;

@RestController
@RequestMapping("/actors")
public class ActorController {

    @Autowired
    private ActorService actorService;

    @GetMapping
    public List<Actor> getAllActors() {
        return actorService.getAllActors();
    }

    @GetMapping("/{id}")
    public Actor getActorById(@PathVariable Integer id) {
        return actorService.getActorById(id);
    }

    @PostMapping
    public Actor saveActor(@RequestBody Actor actor) {
        return actorService.saveActor(actor);
    }

    @PutMapping("/{id}")
    public Actor updateActor(@PathVariable Integer id, @RequestBody Actor actor) {
        return actorService.updateActor(id, actor);
    }

    @DeleteMapping("/{id}")
    public void deleteActor(@PathVariable Integer id) {
        actorService.deleteActor(id);
    }
}

