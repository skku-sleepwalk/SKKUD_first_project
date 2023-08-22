package com.example.skkud3.domain;

import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CommentDto {

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Request {
        private Long comment_id;
        private String content;
        private String createdDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
        private String modifiedDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
        private Long member_id;
        private Long post_id;

        public Comment toEntity() {
            Comment comments = Comment.builder()
                    .commentId(comment_id)
                    .content(content)
                    .createdDate(createdDate)
                    .modifiedDate(modifiedDate)
                    .memberId(member_id)
                    .postId(post_id)
                    .build();

            return comments;
        }

    }

    @Getter
    public static class Response {
        private Long id;
        private String comment;
        private String createdDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
        private String modifiedDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
        private Long member_id;
        private Long post_id;

        /* Entity -> Dto*/
        public Response(Comment comment) {
            this.id = comment.getCommentId();
            this.comment = comment.getContent();
            this.createdDate = comment.getCreatedDate();
            this.modifiedDate = comment.getModifiedDate();
            this.member_id = comment.getMemberId();
            this.post_id = comment.getPostId();
        }
    }

}
