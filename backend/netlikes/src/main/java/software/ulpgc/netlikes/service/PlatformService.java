package software.ulpgc.netlikes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.ulpgc.netlikes.repository.PlatformRepository;
import software.ulpgc.netlikes.model.Platform;
import java.util.List;

@Service
public class PlatformService {
    @Autowired
    private PlatformRepository platformRepository;

    public List<Platform> getAllPlatforms() {
        return platformRepository.findAll();
    }

    public Platform getPlatformById(Integer id) {
        return platformRepository.findById(id).orElse(null);
    }

    public Platform savePlatform(Platform platform) {
        return platformRepository.save(platform);
    }

    public Platform updatePlatform(Integer id, Platform updatedPlatform) {
        return platformRepository.findById(id)
                .map(platform -> {
                    platform.setName(updatedPlatform.getName());
                    platform.setLogo(updatedPlatform.getLogo());
                    return platformRepository.save(platform);
                })
                .orElse(null);
    }

    public void deletePlatform(Integer id) {
        platformRepository.deleteById(id);
    }
}

