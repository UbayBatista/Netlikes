package software.ulpgc.netlikes.service;

import org.springframework.stereotype.Service;
import software.ulpgc.netlikes.dto.UserRequestDTO;
import software.ulpgc.netlikes.dto.UserResponseDTO;
import software.ulpgc.netlikes.model.Genre;
import software.ulpgc.netlikes.model.User;
import software.ulpgc.netlikes.repository.GenreRepository;
import software.ulpgc.netlikes.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final GenreRepository genreRepository;

    public UserService(UserRepository userRepository, GenreRepository genreRepository) {
        this.userRepository = userRepository;
        this.genreRepository = genreRepository;
    }

    public List<UserResponseDTO> getAllUsers() {
        return userRepository.findAll()
                .stream()
                .map(this::toDTO)
                .toList();
    }

    public UserResponseDTO getUserById(String email) {
        User user = userRepository.findById(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return toDTO(user);
    }

    public UserResponseDTO createUser(UserRequestDTO dto) {

        User user = new User();
        applyDtoToEntity(dto, user);

        userRepository.save(user);
        return toDTO(user);
    }

    public UserResponseDTO updateUser(String email, UserRequestDTO dto) {

        User user = userRepository.findById(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        applyDtoToEntity(dto, user);

        userRepository.save(user);
        return toDTO(user);
    }

    public void deleteUser(String email) {
        userRepository.deleteById(email);
    }

    private void applyDtoToEntity(UserRequestDTO dto, User user) {
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword());
        user.setSecurityQuestion(dto.getSecurityQuestion());
        user.setAnswer(dto.getAnswer());
        user.setName(dto.getName());
        user.setBirthdate(dto.getBirthdate());
        user.setAccountPrivacity(dto.isAccountPrivacity());
        user.setShowWatchedFilms(dto.isShowWatchedFilms());
        user.setShowFilmsToWatchLater(dto.isShowFilmsToWatchLater());
        user.setShowRecommendedFilms(dto.isShowRecommendedFilms());
        user.setProfilePicture(dto.getProfilePicture());
        user.setBio(dto.getBio());

        List<Genre> genres = genreRepository.findAllById(dto.getFavoriteGenresIds());
        user.setFavoriteGenres(genres);
    }

    private UserResponseDTO toDTO(User user) {

        UserResponseDTO dto = new UserResponseDTO();

        dto.setEmail(user.getEmail());
        dto.setName(user.getName());
        dto.setBirthdate(user.getBirthdate());
        dto.setAccountPrivacity(user.isAccountPrivacity());
        dto.setProfilePicture(user.getProfilePicture());
        dto.setBio(user.getBio());

        dto.setFavoriteGenres(user.getFavoriteGenres()
                            .stream()
                            .map(Genre::getName)
                            .toList()
        );

        return dto;
    }
}
