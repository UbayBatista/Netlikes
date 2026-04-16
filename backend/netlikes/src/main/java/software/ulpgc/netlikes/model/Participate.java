package software.ulpgc.netlikes.model;
import jakarta.persistence.*;
import lombok.*;

@Entity 
@Table(name = "participate")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Participate {
    @EmbeddedId
    private ParticipateId participateId = new ParticipateId();

    @ManyToOne
    @MapsId("filmId")
    @JoinColumn(name = "film_id")
    private Film film;

    @ManyToOne
    @MapsId("actorId")
    @JoinColumn(name = "actor_id")
    private Actor actor;

    public void setCharacter(String character) {
        this.participateId.setCharacter(character);
    }

    public String getCharacter() {
        return this.participateId.getCharacter();
    }
}
