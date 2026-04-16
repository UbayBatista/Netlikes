package software.ulpgc.netlikes.model;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ParticipateId implements Serializable {
    private Integer actorId;
    private Integer filmId;
    private String character;
}
