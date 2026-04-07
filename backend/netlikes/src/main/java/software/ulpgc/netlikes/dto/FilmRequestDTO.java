package software.ulpgc.netlikes.dto;

import lombok.Data;
import java.sql.Date;
import java.util.Map;

@Data
public class FilmRequestDTO {
    
    private Integer id;
    private boolean adult;
    private String title;
    private String filmUrl;
    private String summary;
    private Date releaseDate;
    private String trailer;

    private Map<Integer, String> genres;
    private Map<Integer, String> platforms;
    private Map<Integer, String> actors;
}
