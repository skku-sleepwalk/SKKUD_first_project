package com.example.skkud3.Controller;

import com.example.skkud3.Service.CommentService;
import com.example.skkud3.domain.CommentDto;

import lombok.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RequestMapping("/api")
@RestController

public class CommentApiController {
    private final CommentService commentService;

    /* 생성 */
    @PostMapping("/posts/{id}/comments")
    public ResponseEntity commentSave(@PathVariable Long id, @RequestBody CommentDto.Request dto
                                     ) {
        return ResponseEntity.ok(commentService.commentSave( id, dto));
    }

    /* 수정 */
    @PutMapping({"/posts/{post_id}/comments/{id}"})
    public ResponseEntity<Long> update(@PathVariable Long post_id, @PathVariable Long id, @RequestBody CommentDto.Request dto) {
        commentService.update(post_id, id, dto);
        return ResponseEntity.ok(id);
    }

    /* 삭제 */
    @DeleteMapping("/posts/{post_id}/comments/{id}")
    public ResponseEntity<Long> delete(@PathVariable Long post_id, @PathVariable Long id) {
        commentService.delete(post_id, id);
        return ResponseEntity.ok(id);
    }
}
