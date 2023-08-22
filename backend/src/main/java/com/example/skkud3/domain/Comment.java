package com.example.skkud3.domain;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Table(name = "comment")
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content; // 댓글 내용

    @Column(name = "created_at")
    @CreatedDate
    private String createdDate;

    @Column(name = "modified_at")
    @LastModifiedDate
    private String modifiedDate;

    //@ManyToOne
    @Column(name = "post_id")
    private Long postId;

    //@ManyToOne
    @Column(name = "member_id")
    private Long memberId; // 작성자

    public void update(String content) {
        this.content =  content;
    }
}
