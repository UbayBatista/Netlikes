package software.ulpgc.netlikes.api;

import org.springframework.stereotype.Component;
import lombok.extern.slf4j.Slf4j;
import software.ulpgc.netlikes.dto.FilmRequestDTO;
import software.ulpgc.netlikes.api.TmdbApiClient;
import software.ulpgc.netlikes.api.TmdbModels.Movie;
import software.ulpgc.netlikes.api.TmdbModels.Video;
import software.ulpgc.netlikes.api.TmdbModels.Genre;
import software.ulpgc.netlikes.api.TmdbModels.Provider;
import software.ulpgc.netlikes.api.TmdbModels.CastMember;


@Component
@Slf4j
public class FilmAssembler {

    private final TmdbApiClient apiClient;

    public FilmAssembler(TmdbApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public FilmRequestDTO toFilmRequestDTO(int filmId) throws RuntimeException {
        try {
            Movie filmDetail = apiClient.getCompleteMovie(filmId);
        } catch (Exception e) {
            log.error("Error al obtener detalles de la película con ID {}: {}", filmId, e.getMessage());
            throw new RuntimeException("No se pudo obtener la información de la película. Inténtalo de nuevo más tarde.");
        }

        return buildDTO(filmDetail);
    }

    private FilmRequestDTO buildDTO(Movie filmDetail) {
        return new FilmRequestDTO()
            .setId(Integer.valueOf(filmDetail.id()))
            .setAdult(filmDetail.adult())
            .setTitle(filmDetail.getTitle())
            .setFilmUrl("https://image.tmdb.org/t/p/original" + filmDetail.posterPath())
            .setSummary(filmDetail.getOverview())
            .setReleaseDate(parseDate(filmDetail.getReleaseDate()))
            .setTrailer(getTrailerUrl(filmDetail.getVideos()))
            .setGenres(extractGenres(filmDetail.getGenres()))
            .setPlatforms(extractProviders(filmDetail.getProviders()))
            .setActors(extractActors(filmDetail.getCast()))
    }

    private Date parseDate(String dateStr) {
        try {
            LocalDate localDate = LocalDate.parse(dateStr);
            return java.sql.Date.valueOf(localDate);
        } catch (ParseException e) {
            return null;
        }
    }

    private String getTrailerUrl(List<Video> videos) {
        return videos.stream()
            .filter(video -> "Trailer".equalsIgnoreCase(video.type()) && "YouTube".equalsIgnoreCase(video.site()))
            .findFirst()
            .map(video -> "https://www.youtube.com/watch?v=" + video.key())
            .orElse(null);
    }

    private Map<Integer, String> extractGenres(List<Genre> genres) {
        return genres.stream()
            .collect(Collectors.toMap(Genre::id, Genre::name));
    }

    private Map<Integer, String> extractProviders(List<Provider> providers) {
        return providers.stream()
            .collect(Collectors.toMap(Provider::providerId, Provider::providerName));
    }

    private Map<Integer, String> extractActors(List<CastMember> cast) {
        return cast.stream()
            .collect(Collectors.toMap(CastMember::id, CastMember::name));
    }
}