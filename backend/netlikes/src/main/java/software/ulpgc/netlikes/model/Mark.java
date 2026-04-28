package software.ulpgc.netlikes.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.*;

@Entity 
@Table(name = "mark")
@Data
@NoArgsConstructor

public class Mark {

    @EmbeddedId
    private MarkId id;

    @ManyToOne
    @MapsId("email")
    @JoinColumn(name = "email")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "marks", "password"})
    @JsonIgnore
    private User user;

    @ManyToOne
    @MapsId("filmId")
    @JoinColumn(name = "filmId")
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "participations", "genres", "platforms"})
    @JsonIgnore
    private Film film;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Type type;

    public enum Type {
        SEEN,
        WATCHLATER
    } 
}