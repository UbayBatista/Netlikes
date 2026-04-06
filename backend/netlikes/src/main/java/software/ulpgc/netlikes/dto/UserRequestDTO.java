package software.ulpgc.netlikes.dto;

import jakarta.validation.constraints.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class UserRequestDTO {

    @Email
    @NotNull
    private String email;

    @NotNull
    @Size(min = 6, message = "La contraseña debe tener al menos 6 caracteres")
    private String password;

    @NotNull
    private String securityQuestion;

    @NotNull
    private String answer;

    @NotNull
    private String name;

    @NotNull
    private Date birthdate;

    private boolean accountPrivacity;
    private boolean showWatchedFilms;
    private boolean showFilmsToWatchLater;
    private boolean showRecommendedFilms;

    private String profilePicture;
    private String bio;

    @Size(min = 3, message = "Debe seleccionar al menos 3 géneros favoritos")
    private List<Integer> favoriteGenresIds;
}
