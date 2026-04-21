package software.ulpgc.netlikes.service;

import java.util.List;

import org.springframework.stereotype.Service;

import software.ulpgc.netlikes.model.Forum;
import software.ulpgc.netlikes.repository.ForumRepository;

@Service
public class ForumService {
    private final ForumRepository forumRepository;

    public ForumService(ForumRepository forumRepository){
        this.forumRepository = forumRepository;
    }

    public List<Forum> getAllForums(){
        return this.forumRepository.findAll();
    }

    public Forum createForum(Forum forum) {
        return this.forumRepository.save(forum);
    }

    public void deleteForum(Integer id){
        this.forumRepository.deleteById(id);
    }
}
