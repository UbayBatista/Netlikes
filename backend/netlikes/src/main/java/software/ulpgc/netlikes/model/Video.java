package software.ulpgc.netlikes.model;

import jakarta.persistence.*;
import lombok.*;

@Entity 
@Table(name = "video")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Video {
    @Id
    private String id;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String key;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String type;

    @ManyToOne(optional = false)
    @JoinColumn(name = "film_id")
    private Film film;
    
}
