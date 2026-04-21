package software.ulpgc.netlikes.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;



import java.util.List;
import java.sql.Date;


import software.ulpgc.netlikes.dto.LoginRequestDTO;
import software.ulpgc.netlikes.dto.RegisterRequestDTO;
import software.ulpgc.netlikes.model.User;
import software.ulpgc.netlikes.model.Genre;
import software.ulpgc.netlikes.repository.UserRepository;
import software.ulpgc.netlikes.repository.GenreRepository;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserControllerTest {

    private MockMvc mockMvc;

    private ObjectMapper objectMapper = new ObjectMapper();

    @Autowired
    private WebApplicationContext context;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
        userRepository.deleteAll();
    }

    @Test
    void register_shouldReturn200_whenDataIsValid() throws Exception {
        Genre genre = new Genre();
        genre.setId(21);
        genre.setName("Acción");

        genreRepository.save(genre);

        RegisterRequestDTO request = new RegisterRequestDTO
        ("Juan", 
        "juan@email.com",
        Date.valueOf("1900-05-21"),
        "1234",
        "Nombre de tu primera mascota",
        "Toby",
        List.of(genre, genre, genre)
        );

        mockMvc.perform(post("/users/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("juan@email.com"))
                .andExpect(jsonPath("$.userName").value("Juan"));
    }

    @Test
    void register_shouldReturn400_whenEmailAlreadyExists() throws Exception {
        Genre genre = new Genre();
        genre.setId(21);
        genre.setName("Acción");

        genreRepository.save(genre);

        User existing = new User();
        existing.setEmail("juan@email.com");
        existing.setPassword(passwordEncoder.encode("1234"));
        existing.setBirthdate(Date.valueOf("1900-05-21"));
        existing.setName("Juan");
        existing.setSecurityQuestion("Nombre de tu primera mascota");
        existing.setAnswer("Toby");
        existing.setFavoriteGenres(List.of(genre, genre, genre));
        userRepository.save(existing);

        RegisterRequestDTO request = new RegisterRequestDTO
        ("Juan", 
        "juan@email.com",
        Date.valueOf("1900-05-21"),
        "1234",
        "Nombre de tu primera mascota",
        "Toby",
        List.of(genre, genre, genre)
        );

        mockMvc.perform(post("/users/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isBadRequest());
    }

    @Test
    void login_shouldReturn200_whenCredentialsAreCorrect() throws Exception {
        Genre genre = new Genre();
        genre.setId(21);
        genre.setName("Acción");

        genreRepository.save(genre);

        User existing = new User();
        existing.setEmail("juan@email.com");
        existing.setPassword(passwordEncoder.encode("1234"));
        existing.setBirthdate(Date.valueOf("1900-05-21"));
        existing.setName("Juan");
        existing.setSecurityQuestion("Nombre de tu primera mascota");
        existing.setAnswer("Toby");
        existing.setFavoriteGenres(List.of(genre, genre, genre));
        userRepository.save(existing);

        LoginRequestDTO request = new LoginRequestDTO("juan@email.com", "1234");

        mockMvc.perform(post("/users/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("juan@email.com"));
    }

    @Test
    void login_shouldReturn401_whenPasswordIsWrong() throws Exception {
        Genre genre = new Genre();
        genre.setId(21);
        genre.setName("Acción");

        genreRepository.save(genre);

        User existing = new User();
        existing.setEmail("juan@email.com");
        existing.setPassword(passwordEncoder.encode("1234"));
        existing.setBirthdate(Date.valueOf("1900-05-21"));
        existing.setName("Juan");
        existing.setSecurityQuestion("Nombre de tu primera mascota");
        existing.setAnswer("Toby");
        existing.setFavoriteGenres(List.of(genre, genre, genre));
        userRepository.save(existing);

        LoginRequestDTO request = new LoginRequestDTO("juan@email.com", "wrongPassword");

        mockMvc.perform(post("/users/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isUnauthorized());
    }
}