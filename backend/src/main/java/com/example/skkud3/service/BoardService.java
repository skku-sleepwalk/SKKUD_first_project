package com.example.skkud3.service;

import com.example.skkud3.domain.Board;
import com.example.skkud3.domain.BoardDto;
import com.example.skkud3.repository.BoardRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    public BoardService(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }
    @Transactional
    public Map<String, Long> savePost(BoardDto boardDto) {
        Board board = boardDto.toEntity();
        Board savedBoard = boardRepository.save(board);

        Map<String, Long> response = new HashMap<>();
        response.put("postId", savedBoard.getPostId());

        return response;
    }

    @Transactional
    public List<BoardDto> getBoardList() {
        List<Board> boardList = boardRepository.findAll();
        // Reverse the order of the list to have the most recent board at the top
        Collections.reverse(boardList);

        return getBoardDtos(boardList);
    }

    private List<BoardDto> getBoardDtos(List<Board> boardList) {
        return boardList.stream()
                .map(board -> BoardDto.builder()
                        .postId(board.getPostId())
                        .hostId(board.getHostId())
                        .title(board.getTitle())
                        .prof(board.getProf())
                        .content(board.getContent())
                        .createdAt(board.getCreatedAt())
                        .mon(board.getMon())
                        .tue(board.getTue())
                        .wed(board.getWed())
                        .thu(board.getThu())
                        .fri(board.getFri())
                        .sat(board.getSat())
                        .sun(board.getSun())
                        .build())
                .collect(Collectors.toList());
    }

    @Transactional
    public BoardDto getPost(Long id) {
        Optional<Board> optionalBoard = boardRepository.findById(id);

        if (optionalBoard.isPresent()) {
            Board board = optionalBoard.get();
            return BoardDto.builder()
                    .postId(board.getPostId())
                    .hostId(board.getHostId())
                    .title(board.getTitle())
                    .prof(board.getProf())
                    .content(board.getContent())
                    .createdAt(board.getCreatedAt())
                    .mon(board.getMon())
                    .tue(board.getTue())
                    .wed(board.getWed())
                    .thu(board.getThu())
                    .fri(board.getFri())
                    .sat(board.getSat())
                    .sun(board.getSun())
                    .build();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Board not found");
        }
    }

    @Transactional
    public void deletePost(Long id) {
        boardRepository.deleteById(id);
    }

    public List<BoardDto> searchBoards(String keyword) {
        List<Board> boards = boardRepository.findByTitleContainingIgnoreCase(keyword);
        return getBoardDtos(boards);
    }
}