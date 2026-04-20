package software.ulpgc.netlikes.repository;

import software.ulpgc.netlikes.model.Forum;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ForumRepository extends JpaRepository<Forum, Integer> {}
