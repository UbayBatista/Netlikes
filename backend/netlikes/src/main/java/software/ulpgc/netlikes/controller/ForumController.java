package software.ulpgc.netlikes.controller;

import software.ulpgc.netlikes.service.ForumService;
import software.ulpgc.netlikes.model.Forum;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/forum")
public class ForumController {
    private final ForumService forumService;

    public ForumController(ForumService forumService){
        this.forumService = forumService;
    }

    @GetMapping  
    public List<Forum> getAll(){
        return this.forumService.getAllForums();
    }

    @PostMapping
    public Forum create(@Valid @RequestBody Forum forum){
        return this.forumService.createForum(forum);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {
        this.forumService.deleteForum(id);
    }
}
