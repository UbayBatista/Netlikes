package software.ulpgc.netlikes.controller;

import software.ulpgc.netlikes.service.ForumService;
import software.ulpgc.netlikes.model.Forum;

import java.util.List;

public class ForumController {
    private final ForumService forumService;

    public ForumController(ForumService forumService){
        this.forumService = forumService;
    }

    public List<Forum> getAll(){
        return this.forumService.getAllForums();
    }

    public Forum create(Forum forum){
        return this.forumService.createForum(forum);
    }

    public void delete(Integer id) {
        this.forumService.deleteForum(id);
    }
}
