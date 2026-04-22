package software.ulpgc.netlikes.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class ValidAnswerRequestDTO {

    private String email;
    private String answer;
}