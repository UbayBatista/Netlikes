package software.ulpgc.netlikes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.ulpgc.netlikes.model.Genre;

public interface GenreRepository extends JpaRepository<Genre, Integer> {
}
