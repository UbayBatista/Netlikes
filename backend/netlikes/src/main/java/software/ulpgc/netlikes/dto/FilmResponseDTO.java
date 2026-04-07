package software.ulpgc.netlikes.dto;

import lombok.Data;
import java.sql.Date;
import java.util.List;

@Data
public class FilmResponseDTO {

    private Integer id;
    private boolean adult;
    private String title;
    private String filmUrl;
    private String summary;
    private Date releaseDate;
    private String trailer;

    private List<String> genres;
    private List<String> platforms;
    private List<String> actors;
}

