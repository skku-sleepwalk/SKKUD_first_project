package com.example.skkud3.Repository;

import com.example.skkud3.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepository extends JpaRepository<Comment,Long> {
    Optional<Comment> findByPostIdAndCommentId(Long post_id, Long comment_id);
}
