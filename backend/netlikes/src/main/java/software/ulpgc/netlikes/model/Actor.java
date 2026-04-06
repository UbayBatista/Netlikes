package software.ulpgc.netlikes.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "actor")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Actor {
    @Id
    private Integer id;

    @Column(nullable = false)
    private String name;
}
