package com.seujogo.snakegame.controller;

import com.seujogo.snakegame.model.Score;
import com.seujogo.snakegame.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scores")
@CrossOrigin(origins = "*")
public class ScoreController {
    
    @Autowired
    private ScoreService scoreService;
    
    @PostMapping
    public ResponseEntity<Score> saveScore(@RequestBody Score score) {
        try {
            Score savedScore = scoreService.saveScore(score);
            return ResponseEntity.ok(savedScore);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/leaderboard")
    public ResponseEntity<List<Score>> getLeaderboard() {
        try {
            List<Score> scores = scoreService.getTop10Scores();
            return ResponseEntity.ok(scores);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/player/{name}")
    public ResponseEntity<List<Score>> getPlayerScores(@PathVariable String name) {
        try {
            List<Score> scores = scoreService.getPlayerScores(name);
            return ResponseEntity.ok(scores);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    // Endpoint de teste
    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("API está funcionando! 🎉");
    }
}