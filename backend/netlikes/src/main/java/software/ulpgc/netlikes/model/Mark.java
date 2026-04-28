package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;

@Entity 
@Table(name = "mark")
@Data
@NoArgsConstructor

public class Mark {

    @EmbeddedId
    private MarkId id = new MarkId();

    @ManyToOne
    @MapsId("email")
    @JoinColumn(name = "email")
    private User user;

    @ManyToOne
    @MapsId("filmId")
    @JoinColumn(name = "filmId")
    private Film film;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Type type;

    public enum Type {
        SEEN,
        WATCHLATER
    } 
}