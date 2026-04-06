package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity 
@Table(name = "film")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Film{
    @Id
    private Integer id;

    @Column(nullable = false)
    private boolean adult;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String filmUrl;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String summary;

    @Column(columnDefinition = "TEXT")
    private String trailer;

    @ManyToMany
    @JoinTable(name = "available", 
        joinColumns = @JoinColumn(name = "filmId"),
        inverseJoinColumns = @JoinColumn(name = "platformId")    
    )

    private List<Platform> platforms;

    
    @ManyToMany
    @JoinTable(
        name = "belong_to",
        joinColumns = @JoinColumn(name = "filmId"),
        inverseJoinColumns = @JoinColumn(name = "genreId")
    )
    private List<Genre> genres;

    @ManyToMany
    @JoinTable(
        name = "participate",
        joinColumns = @JoinColumn(name = "filmId"),
        inverseJoinColumns = @JoinColumn(name = "actorId")
    )
    private List<Genre> participateIn;
}