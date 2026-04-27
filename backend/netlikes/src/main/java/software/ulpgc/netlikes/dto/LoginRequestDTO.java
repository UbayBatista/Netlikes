package software.ulpgc.netlikes.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class LoginRequestDTO {

    private String email;
    private String password;
}