package com.example.skkud3.controller;

import com.example.skkud3.domain.BoardDto;
import com.example.skkud3.service.BoardService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/board")
public class BoardController {
    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    @GetMapping
    public List<BoardDto> getBoardList() {
        return boardService.getBoardList();
    }

    @PostMapping
    public Map<String, Long> createPost(@RequestBody BoardDto boardDto) {
        return boardService.savePost(boardDto);
    }

    @GetMapping("/{id}")
    public BoardDto getPostById(@PathVariable("id") Long id) {
        return boardService.getPost(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updatePost(@PathVariable("id") Long id, @RequestBody BoardDto boardDto) {
        BoardDto existingBoard = boardService.getPost(id);

        if (existingBoard == null) {
            return ResponseEntity.notFound().build();
        }

        existingBoard.setTitle(boardDto.getTitle());
        existingBoard.setContent(boardDto.getContent());
        existingBoard.setProf(boardDto.getProf());
        existingBoard.setMon(boardDto.getMon());
        existingBoard.setTue(boardDto.getTue());
        existingBoard.setWed(boardDto.getWed());
        existingBoard.setThu(boardDto.getThu());
        existingBoard.setFri(boardDto.getFri());
        existingBoard.setSat(boardDto.getSat());
        existingBoard.setSun(boardDto.getSun());

        BoardDto updatedBoard = (BoardDto) boardService.savePost(existingBoard);
        System.out.println(updatedBoard);
        if (updatedBoard != null) {
            Map<String, String> response = new HashMap<>();
            response.put("message", "게시글 수정 성공");

            return ResponseEntity.ok("Good");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("게시글 수정 실패");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePost(@PathVariable("id") Long id) {
        BoardDto existingBoard = boardService.getPost(id);

        if (existingBoard != null) {
            boardService.deletePost(id);
            return ResponseEntity.ok("게시글 삭제 성공");
        }
        else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("게시글 삭제 실패");
        }
    }
    @GetMapping("/search")
    public List<BoardDto> searchBoards(@RequestParam("keyword") String keyword) {
        return boardService.searchBoards(keyword);
    }
}