package software.ulpgc.netlikes.service;

import org.springframework.stereotype.Service;

import software.ulpgc.netlikes.model.Video;
import software.ulpgc.netlikes.repository.VideoRepository;

@Service
public class VideoService {
    private final VideoRepository videoRepository;

    public VideoService(VideoRepository videoRepository) {
        this.videoRepository = videoRepository;
    }

    public Video saveVideo(Video video) {
        return videoRepository.save(video);
    }

    public Video getVideoById(String id) {
        return videoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Video not found"));
    }

    public Video updateVideo(String id, Video video) {
        Video existingVideo = videoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Video not found"));

        existingVideo.setName(video.getName());
        existingVideo.setKey(video.getKey());
        existingVideo.setType(video.getType());
        existingVideo.setSite(video.getSite());

        return videoRepository.save(existingVideo);
    }

    public void deleteVideo(String id) {
        videoRepository.deleteById(id);
    }
}
