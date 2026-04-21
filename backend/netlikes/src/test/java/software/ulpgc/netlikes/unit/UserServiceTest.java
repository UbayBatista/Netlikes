package software.ulpgc.netlikes.unit;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import software.ulpgc.netlikes.dto.LoginRequestDTO;
import software.ulpgc.netlikes.dto.RegisterRequestDTO;
import software.ulpgc.netlikes.dto.UserResponseDTO;
import software.ulpgc.netlikes.model.User;
import software.ulpgc.netlikes.model.Genre;
import software.ulpgc.netlikes.repository.GenreRepository;
import software.ulpgc.netlikes.repository.UserRepository;
import software.ulpgc.netlikes.service.UserService;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private GenreRepository genreRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private UserService userService;

    @Test
    void register_shouldReturnUserDTO_whenEmailIsNew() {
        Genre genre1 = new Genre();
        genre1.setId(21);
        genre1.setName("Acción");

        Genre genre2 = new Genre();
        genre2.setId(23);
        genre2.setName("Drama");

        Genre genre3 = new Genre();
        genre3.setId(15);
        genre3.setName("Terror");

        RegisterRequestDTO request = new RegisterRequestDTO
        ("Juan", 
        "juan@email.com",
        Date.valueOf("1900-05-21"),
        "SuperMan23",
        "Nombre de tu primera mascota",
        "Toby",
        List.of(genre1, genre2, genre3)
        );

        when(userRepository.existsByEmail("juan@email.com")).thenReturn(false);
        when(passwordEncoder.encode("SuperMan23")).thenReturn("hashedPassword");
        when(userRepository.save(any(User.class))).thenAnswer(i -> i.getArgument(0));

        UserResponseDTO result = userService.register(request);

        assertThat(result.getEmail()).isEqualTo("juan@email.com");
        assertThat(result.getUserName()).isEqualTo("Juan");
    }

    @Test
    void register_shouldThrowException_whenEmailAlreadyExists() {
        Genre genre1 = new Genre();
        genre1.setId(21);
        genre1.setName("Acción");

        Genre genre2 = new Genre();
        genre2.setId(23);
        genre2.setName("Drama");

        RegisterRequestDTO request = new RegisterRequestDTO
        ("Juan", 
        "juan@email.com",
        Date.valueOf("2002-11-15"),
        "SuperMan23",
        "Nombre de tu primera mascota",
        "Toby",
        List.of(genre1, genre2)
        );

        when(userRepository.existsByEmail("juan@email.com")).thenReturn(true);

        assertThrows(RuntimeException.class, () -> userService.register(request));
    }

    @Test
    void login_shouldReturnUserDTO_whenCredentialsAreCorrect() {
        LoginRequestDTO request = new LoginRequestDTO("juan@email.com", "SuperMan23");

        User user = new User();
        user.setEmail("juan@email.com");
        user.setName("Juan");
        user.setPassword("hashedPassword");

        when(userRepository.findById("juan@email.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("SuperMan23", "hashedPassword")).thenReturn(true);

        UserResponseDTO result = userService.login(request);

        assertThat(result.getEmail()).isEqualTo("juan@email.com");
    }

    @Test
    void login_shouldThrowException_whenPasswordIsWrong() {
        LoginRequestDTO request = new LoginRequestDTO("juan@email.com", "wrongPassword");

        User user = new User();
        user.setEmail("juan@email.com");
        user.setPassword("hashedPassword");

        when(userRepository.findById("juan@email.com")).thenReturn(Optional.of(user));
        when(passwordEncoder.matches("SuperMan21", "hashedPassword")).thenReturn(false);

        assertThrows(RuntimeException.class, () -> userService.login(request));
    }

    @Test
    void login_shouldThrowException_whenUserNotFound() {
        LoginRequestDTO request = new LoginRequestDTO("joss@email.com", "SuperMan23");

        when(userRepository.findById("joss@email.com")).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> userService.login(request));
    }
}