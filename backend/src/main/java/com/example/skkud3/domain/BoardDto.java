package com.example.skkud3.domain;

import lombok.*;

import java.time.LocalDateTime;
@Getter
@Setter
@ToString
@NoArgsConstructor
public class BoardDto {
    private Long postId;
    private Long hostId;
    private String title;
    private String content;
    private LocalDateTime createdAt;


    public Board toEntity() {
        return Board.builder()
                .postId(postId)
                .hostId(hostId)
                .title(title)
                .content(content)
                .build();
    }

    @Builder
    public BoardDto(Long postId, Long hostId, String title, String content, LocalDateTime createdAt) {
        this.postId = postId;
        this.hostId = hostId;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
    }
}