package com.seujogo.snakegame.service;

import com.seujogo.snakegame.model.Score;
import com.seujogo.snakegame.repository.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ScoreService {
    
    @Autowired
    private ScoreRepository scoreRepository;
    
    public Score saveScore(Score score) {
        return scoreRepository.save(score);
    }
    
    public List<Score> getTop10Scores() {
        return scoreRepository.findTop10ByOrderByScoreDesc();
    }
    
    public List<Score> getPlayerScores(String playerName) {
        return scoreRepository.findByPlayerNameOrderByScoreDesc(playerName);
    }
    
    public boolean playerExists(String playerName) {
        return scoreRepository.existsByPlayerName(playerName);
    }
}