package com.example.skkud3.domain;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class Board {

    @Id
    @GeneratedValue
    private Long postId;

    @Column(name = "host_id", length = 10)
    private Long hostId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 100, nullable = false)
    private String prof;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @CreatedDate
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @Column
    private Integer mon;
    @Column
    private Integer tue;
    @Column
    private Integer wed;
    @Column
    private Integer thu;
    @Column
    private Integer fri;
    @Column
    private Integer sat;
    @Column
    private Integer sun;


    @Builder
    public Board(Long postId, Long hostId, String title, String prof, String content, Integer mon, Integer tue, Integer wed, Integer thu, Integer fri, Integer sat, Integer sun) {
        this.postId = postId;
        this.hostId = hostId;
        this.title = title;
        this.prof = prof;
        this.content = content;
        this.mon = mon;
        this.tue = tue;
        this.wed = wed;
        this.thu = thu;
        this.fri = fri;
        this.sat = sat;
        this.sun = sun;
    }
}