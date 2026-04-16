package software.ulpgc.netlikes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import software.ulpgc.netlikes.model.Video;

public interface VideoRepository extends JpaRepository<Video, String> {}
