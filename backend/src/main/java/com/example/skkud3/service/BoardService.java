package com.example.skkud3.service;

import com.example.skkud3.domain.Board;
import com.example.skkud3.domain.BoardDto;
import com.example.skkud3.repository.BoardRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    private final ObjectMapper objectMapper;

    public BoardService(BoardRepository boardRepository, ObjectMapper objectMapper) {
        this.boardRepository = boardRepository;
        this.objectMapper = objectMapper;
    }
    @Transactional
    public Long savePost(BoardDto boardDto) {
        Board board = boardDto.toEntity();
        Board savedBoard = boardRepository.save(board);
        return savedBoard.getPostId();
    }

    @Transactional
    public List<BoardDto> getBoardList() {
        List<Board> boardList = boardRepository.findAll();
        List<BoardDto> boardDtoList = new ArrayList<>();

        for(Board board : boardList) {
            BoardDto boardDto = BoardDto.builder()
                    .postId(board.getPostId())
                    .hostId(board.getHostId())
                    .title(board.getTitle())
                    .content(board.getContent())
                    .createdAt(board.getCreatedAt())
                    .build();
            boardDtoList.add(boardDto);
        }
        return boardDtoList;
    }

    @Transactional
    public BoardDto getPost(Long id) {
        Board board = boardRepository.findById(id).get();

        return BoardDto.builder()
                .postId(board.getPostId())
                .hostId(board.getHostId())
                .title(board.getTitle())
                .content(board.getContent())
                .createdAt(board.getCreatedAt())
                .build();
    }

    @Transactional
    public void deletePost(Long id) {
        boardRepository.deleteById(id);
    }

    public List<BoardDto> searchBoards(String keyword) {
        List<Board> boards = boardRepository.findByTitleContainingIgnoreCase(keyword);
        return boards.stream()
                .map(board -> BoardDto.builder()
                        .postId(board.getPostId())
                        .hostId(board.getHostId())
                        .title(board.getTitle())
                        .content(board.getContent())
                        .createdAt(board.getCreatedAt())
                        .build())
                .collect(Collectors.toList());
    }
}