package software.ulpgc.netlikes.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "platform")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Platform {
    @Id
    private Integer id;

    @Column(nullable = false)
    private String name;
}
