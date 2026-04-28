package software.ulpgc.netlikes.repository;

import software.ulpgc.netlikes.model.User;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface UserRepository extends JpaRepository<User, String> {
    boolean existsByEmail(String email);
    List<User> findByNameContainingIgnoreCase(String name, Pageable pageable);
}
