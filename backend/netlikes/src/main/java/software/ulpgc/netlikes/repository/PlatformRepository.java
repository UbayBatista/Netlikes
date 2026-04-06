package software.ulpgc.netlikes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.ulpgc.netlikes.model.Platform;

public interface PlatformRepository extends JpaRepository<Platform, Integer> {
}
