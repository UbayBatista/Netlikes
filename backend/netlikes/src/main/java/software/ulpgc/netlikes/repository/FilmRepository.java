package software.ulpgc.netlikes.repository;
import software.ulpgc.netlikes.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Integer>{
}