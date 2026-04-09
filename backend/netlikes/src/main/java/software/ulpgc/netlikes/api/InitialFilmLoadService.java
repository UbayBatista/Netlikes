package software.ulpgc.netlikes.api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import lombok.extern.slf4j.Slf4j;
import lombok.RequiredArgsConstructor;
import software.ulpgc.netlikes.service.FilmService;
import software.ulpgc.netlikes.dto.FilmRequestDTO;
import java.util.List;

@Service
@Slf4j
@RequiredArgsConstructor
public class InitialFilmLoadService implements LoadService {

    private final TmdbApiClient apiClient;
    private final FilmAssembler filmAssembler;
    private final FilmService filmService;

    @Value("${tmdb.load.max-films:40}")
    private int maxFilms;

    @Override
    public void loadAll() {
        if (filmService.getAllFilms().size() > 0) {
            log.info("BD ya tiene datos, omitiendo carga inicial");
            return;
        }
        loadFilms();
    }

    private void loadFilms() {
        List<Integer> ids = apiClient.getPopularMovieIds(maxFilms);
        int success = 0, failed = 0;

        for (int filmId : ids) {
            try {
                FilmRequestDTO dto = filmAssembler.toFilmRequestDTO(filmId);
                filmService.saveFilm(dto);
                success++;
            } catch (Exception e) {
                log.error("Error inesperado con película {}: {}", filmId, e.getMessage());
                failed++;
            }
        }

        log.info("Carga completada: {} OK, {} fallidas", success, failed);
    }
}