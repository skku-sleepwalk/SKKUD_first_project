package com.example.skkud3.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    private String prof;
    private String content;
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
//    2023-08-12T22:10:04.661672

    private LocalDateTime createdAt;
    private Integer mon = 0;
    private Integer tue = 0;
    private Integer wed = 0;
    private Integer thu = 0;
    private Integer fri = 0;
    private Integer sat = 0;
    private Integer sun = 0;


    public Board toEntity() {
        return Board.builder()
                .postId(postId)
                .hostId(hostId)
                .title(title)
                .prof(prof)
                .content(content)
                .mon(mon)
                .tue(tue)
                .wed(wed)
                .thu(thu)
                .fri(fri)
                .sat(sat)
                .sun(sun)
                .build();
    }

    @Builder
    public BoardDto(Long postId, Long hostId, String title, String content, String prof,LocalDateTime createdAt, Integer mon, Integer tue, Integer wed, Integer thu, Integer fri, Integer sat, Integer sun) {
        this.postId = postId;
        this.hostId = hostId;
        this.title = title;
        this.prof = prof;
        this.content = content;
        this.createdAt = createdAt;
        this.mon = mon;
        this.tue = tue;
        this.wed = wed;
        this.thu = thu;
        this.fri = fri;
        this.sat = sat;
        this.sun = sun;
    }
}