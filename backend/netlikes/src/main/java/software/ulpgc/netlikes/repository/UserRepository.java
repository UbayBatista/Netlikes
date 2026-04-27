package software.ulpgc.netlikes.repository;

import software.ulpgc.netlikes.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByEmail(String email);
}
