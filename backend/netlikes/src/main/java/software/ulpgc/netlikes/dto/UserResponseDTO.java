package software.ulpgc.netlikes.dto;

import java.util.Date;
import java.util.List;

import lombok.*;

@Getter
@Setter
public class UserResponseDTO {

    private String email;
    private String name;
    private Date birthdate;
    private boolean accountPrivacity;

    private String profilePicture;
    private String bio;

    private List<String> favoriteGenres;
}
