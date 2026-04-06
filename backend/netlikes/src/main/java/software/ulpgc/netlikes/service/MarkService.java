package software.ulpgc.netlikes.service;

import software.ulpgc.netlikes.model.Mark;
import software.ulpgc.netlikes.model.MarkId;
import software.ulpgc.netlikes.repository.MarkRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MarkService {

    private final MarkRepository markRepository;
    private final UserRepository userRepository;
    private final FilmRepository filmRepository;
    
    public Mark typeFilm(String email, Integer filmId, String type) {
        
        MarkId id = new MarkId(email, filmId);

        return MarkRepository.findById(id)
            .map(relationExists -> {
                relationExists.setEstado(type);
                return userFilmRepository.save(relationExists);
            })
            .orElseGet(() -> {
                User user = userRepository.findById(email).orElseThrow();
                Film film = filmRepository.findById(filmId).orElseThrow();

                Mark relation = new Mark();
                relation.setUser(user);
                relation.setFilm(film);
                relation.setEstado(type);

                return markRepository.save(relacion);
            });
    }

    public void deletetype(String email, Integer filmId) {
        MarkId id = new MarkId(email, filmId);
        userFilmRepository.deleteById(id);
    }

}
