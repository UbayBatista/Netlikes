package software.ulpgc.netlikes.service;

import software.ulpgc.netlikes.model.Film;
import software.ulpgc.netlikes.model.User;
import software.ulpgc.netlikes.model.Mark;
import software.ulpgc.netlikes.model.MarkId;
import software.ulpgc.netlikes.repository.FilmRepository;
import software.ulpgc.netlikes.repository.MarkRepository;
import software.ulpgc.netlikes.repository.UserRepository;
import org.springframework.stereotype.Service;
import lombok.*;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarkService {

    private final MarkRepository markRepository;
    private final UserRepository userRepository;
    private final FilmRepository filmRepository;
    
    public Mark typeFilm(String email, Integer filmId, String type) {
        
        MarkId id = new MarkId(email, filmId);

        return markRepository.findById(id)
            .map(relationExists -> {
                relationExists.setType(type);
                return markRepository.save(relationExists);
            })
            .orElseGet(() -> {
                User user = userRepository.findById(email).orElseThrow();
                Film film = filmRepository.findById(filmId).orElseThrow();

                Mark relation = new Mark();
                relation.setUser(user);
                relation.setFilm(film);
                relation.setType(type);

                return markRepository.save(relation);
            });
    }

    public void deletetype(String email, Integer filmId) {
        MarkId id = new MarkId(email, filmId);
        markRepository.deleteById(id);
    }

}
