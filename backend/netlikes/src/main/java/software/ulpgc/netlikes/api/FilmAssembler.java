package software.ulpgc.netlikes.api;

import java.time.LocalDate;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import software.ulpgc.netlikes.dto.FilmRequestDTO;
import software.ulpgc.netlikes.api.TmdbModels.Movie;
import software.ulpgc.netlikes.api.TmdbModels.Video;
import software.ulpgc.netlikes.api.TmdbModels.Genre;
import software.ulpgc.netlikes.api.TmdbModels.Provider;
import software.ulpgc.netlikes.api.TmdbModels.CastMember;
import java.sql.Date;
import java.util.List;
import java.util.Map;

@Component
@Slf4j
@RequiredArgsConstructor
public class FilmAssembler {

    private final TmdbApiClient apiClient;

    public FilmRequestDTO toFilmRequestDTO(int filmId) throws RuntimeException {
        try {
            Movie filmDetail = apiClient.getCompleteMovie(filmId);
            return buildDTO(filmDetail);
        } catch (Exception e) {
            log.error("Error al obtener detalles de la película con ID {}: {}", filmId, e.getMessage());
            throw new RuntimeException("No se pudo obtener la información de la película. Inténtalo de nuevo más tarde.");
        }  
    }

    private FilmRequestDTO buildDTO(Movie filmDetail) {
        FilmRequestDTO dto = new FilmRequestDTO();
        dto.setId(Integer.valueOf(filmDetail.id()));
        dto.setTitle(filmDetail.title());
        dto.setOverView(filmDetail.overview());
        dto.setAdult(filmDetail.adult());
        dto.setAgeRating(filmDetail.ageRating());
        dto.setTagline(filmDetail.tagline());
        dto.setRuntime(filmDetail.runtime());
        dto.setReleaseDate(parseDate(filmDetail.releaseDate()));
        dto.setPosterPath("https://image.tmdb.org/t/p/original" + filmDetail.posterPath());
        dto.setVideos(getVideoInformation(filmDetail.videos()));
        dto.setGenres(extractGenres(filmDetail.genres()));
        dto.setWatchProviders(extractProviders(filmDetail.watchProviders()));
        dto.setCast(extractActors(filmDetail.cast()));
        return dto;
    }

    private Date parseDate(String dateStr) {
        try {
            LocalDate localDate = LocalDate.parse(dateStr);
            return java.sql.Date.valueOf(localDate);
        } catch (Exception e) {
            return null;
        }
    }

    private List<Map<String, String>> getVideoInformation(List<Video> videos) {
        return videos.stream()
            .map(video -> {
                Map<String, String> map = new java.util.HashMap<>();
                map.put("id", video.id());
                map.put("name", video.name());
                map.put("key", video.key());
                map.put("type", video.type());
                map.put("site", video.site());
                return map;
            })
            .toList();
    }

    private Map<Integer, String> extractGenres(List<Genre> genres) {
        return genres.stream()
            .collect(Collectors.toMap(Genre::id, Genre::name));
    }

    private List<Map<String, String>> extractProviders(List<Provider> providers) {
        return providers.stream()
            .map(provider -> {
                Map<String, String> map = new java.util.HashMap<>();
                map.put("id", String.valueOf(provider.providerId()));
                map.put("name", provider.providerName());
                map.put("logoPath", provider.logoPath());
                return map;
            })
            .toList();
    }

    private List<Map<String, String>> extractActors(List<CastMember> cast) {
        return cast.stream()
            .map(actor -> {
                Map<String, String> map = new java.util.HashMap<>();
                map.put("id", String.valueOf(actor.id()));
                map.put("name", actor.name());
                map.put("profilePath", actor.profilePath());
                return map;
            })
            .toList();
    }
}