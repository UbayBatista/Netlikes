package software.ulpgc.netlikes.controller;

import software.ulpgc.netlikes.model.Follow;
import software.ulpgc.netlikes.service.FollowService;

import java.util.List;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/follows")
public class FollowController {
    private final FollowService followService;

    public FollowController(FollowService followService){
        this.followService = followService;
    }
    
    @PostMapping
    public Follow createFollow(@RequestBody Follow follow) {
        return followService.createFollow(follow);
    }

    @GetMapping("/{followerId}")
    public List<Follow> getFollowByFollowerId(@PathVariable String followerId) {
        return followService.getFollowByFollowerId(followerId);
    }
    
    @PutMapping("/{id}")
    public Follow updateFollow(@PathVariable String id, @RequestBody Follow follow) {
        return followService.updateFollow(follow);
    }

    @DeleteMapping("/{followerId}/{followedId}")
    public void deleteParticipate(@PathVariable String followerId, @PathVariable String followedId) {
        followService.deleteFollow(followerId, followedId);
    }
}
