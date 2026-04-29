package software.ulpgc.netlikes.repository;

import software.ulpgc.netlikes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByEmail(String email);
    Optional<User> findByName(String name);
}
