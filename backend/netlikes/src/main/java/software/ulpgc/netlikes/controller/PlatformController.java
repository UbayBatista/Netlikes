package software.ulpgc.netlikes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import software.ulpgc.netlikes.model.Platform;
import software.ulpgc.netlikes.service.PlatformService;
import java.util.List;

@RestController
@RequestMapping("/platforms")
public class PlatformController {
    @Autowired
    private PlatformService platformService;

    @GetMapping
    public List<Platform> getAllPlatforms() {
        return platformService.getAllPlatforms();
    }

    @GetMapping("/{id}")
    public Platform getPlatformById(@PathVariable Integer id) {
        return platformService.getPlatformById(id);
    }

    @PostMapping
    public Platform savePlatform(@RequestBody Platform platform) {
        return platformService.savePlatform(platform);
    }

    @PutMapping("/{id}")
    public Platform updatePlatform(@PathVariable Integer id, @RequestBody Platform platform) {
        return platformService.updatePlatform(id, platform);
    }

    @DeleteMapping("/{id}")
    public void deletePlatform(@PathVariable Integer id) {
        platformService.deletePlatform(id);
    }
}
