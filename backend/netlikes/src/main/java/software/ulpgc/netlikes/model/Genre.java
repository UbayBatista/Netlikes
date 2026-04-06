package software.ulpgc.netlikes.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Table(name = "genre") 
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Genre {
    @Id
    private Integer id;

    @Column(nullable = false)
    private String name;

    @ManyToMany(mappedBy = "genres")
    private List<Film> films;
}
