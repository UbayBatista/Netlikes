package software.ulpgc.netlikes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.ulpgc.netlikes.model.Actor;

public interface ActorRepository extends JpaRepository<Actor, Integer> {
}
