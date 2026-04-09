package software.ulpgc.netlikes.dto;

import lombok.Data;
import java.sql.Date;
import java.util.List;

@Data
public class FilmResponseDTO {

    private Integer id;
    private String title;
    private String posterPath;
    private String overView;
    private boolean adult;
    private Date releaseDate;
    
    private List<String> genres;
    private List<String> actors;
    private List<String> videos;
    private List<String> watchProviders;
}

