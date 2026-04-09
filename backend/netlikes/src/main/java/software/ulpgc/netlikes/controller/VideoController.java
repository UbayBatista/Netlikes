package software.ulpgc.netlikes.controller;

import org.springframework.web.bind.annotation.RestController;

import software.ulpgc.netlikes.model.Video;
import software.ulpgc.netlikes.service.VideoService;

@RestController
public class VideoController {

    private final VideoService videoService;

    public VideoController(VideoService videoService) {
        this.videoService = videoService;
    }

    public Video createVideo(Video video) {
        return videoService.saveVideo(video);
    }

    public Video getVideoById(String id) {
        return videoService.getVideoById(id);
    }

    public Video updateVideo(String id, Video video) {
        return videoService.updateVideo(id, video);
    }

    public void deleteVideo(String id) {
        videoService.deleteVideo(id);
    }
    
}
