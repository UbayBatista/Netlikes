package software.ulpgc.netlikes.service;

import software.ulpgc.netlikes.model.User;
import software.ulpgc.netlikes.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(String id, User updatedUser) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setName(updatedUser.getName());
                    user.setBio(updatedUser.getBio());
                    user.setProfilePicture(updatedUser.getProfilePicture());
                    user.setAccountPrivacity(updatedUser.isAccountPrivacity());
                    return userRepository.save(user);
                })
                .orElse(null);
    }

    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }    
}
