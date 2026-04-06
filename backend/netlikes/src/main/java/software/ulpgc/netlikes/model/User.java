package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;

@Entity
@Table(name="user")
@Data
@NoArgsConstructor 
@AllArgsConstructor
public class User {
    @Id private String email;
    @Column(nullable=false) private String password;
    @Column(nullable=false) private String securityQuestion;
    @Column(nullable=false) private String answer;
    @Column(nullable=false) private String name;
    @Column(nullable=false) private Date birthdate;
    @Column(nullable=false) private boolean accountPrivacity;
    @Column(nullable=false) private boolean watchedFilms;
    @Column(nullable=false) private boolean filmsToWatchLater;
    @Column(nullable=false) private boolean recommendedFilms;
    @Column(nullable=true) private String profilePicture;
    @Column(nullable=true) private String bio;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Mark> markFilms;
}
