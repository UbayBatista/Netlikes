package software.ulpgc.netlikes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.ulpgc.netlikes.model.Actor;
import software.ulpgc.netlikes.repository.ActorRepository;
import java.util.List;

@Service
public class ActorService {
    @Autowired
    private ActorRepository actorRepository;

    public List<Actor> getAllActors() {
        return actorRepository.findAll();
    }

    public Actor getActorById(Integer id) {
        return actorRepository.findById(id).orElse(null);
    }

    public Actor saveActor(Actor actor) {
        return actorRepository.save(actor);
    }

    public Actor updateActor(Integer id, Actor updatedActor) {
        return actorRepository.findById(id)
                .map(actor -> {
                    actor.setName(updatedActor.getName());
                    return actorRepository.save(actor);
                })
                .orElse(null);
    }

    public void deleteActor(Integer id) {
        actorRepository.deleteById(id);
    }
}
