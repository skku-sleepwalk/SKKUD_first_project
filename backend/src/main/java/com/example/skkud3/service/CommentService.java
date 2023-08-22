package com.example.skkud3.Service;

import com.example.skkud3.Repository.CommentRepository;
import com.example.skkud3.domain.Comment;

import com.example.skkud3.domain.CommentDto;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CommentService {
    private final CommentRepository commentRepository;
    //private final PostsRepository postsRepository;

    /* 댓글 생성 */
    @Transactional
    public Long commentSave(Long post_id, CommentDto.Request dto) {
        //int posts = postsRepository.findById(post_id).orElseThrow(() ->
        //           new IllegalArgumentException("댓글 쓰기 실패: 해당 게시글이 존재하지 않습니다." + id));


        Comment comment = dto.toEntity();
        commentRepository.save(comment);

        return dto.getComment_id();
    }

    /* 수정 */
    @Transactional
    public void update(Long post_id, Long id, CommentDto.Request dto) {
        Comment comment = commentRepository.findByPostIdAndCommentId(post_id, id).orElseThrow(() ->
                new IllegalArgumentException("해당 댓글이 존재하지 않습니다. " + id));

        comment.update(dto.getContent());
    }

    /* 삭제 */
    @Transactional
    public void delete(Long post_id, Long id) {
        Comment comment = commentRepository.findByPostIdAndCommentId(post_id, id).orElseThrow(() ->
                new IllegalArgumentException("해당 댓글이 존재하지 않습니다. id=" + id));

        commentRepository.delete(comment);
    }
}