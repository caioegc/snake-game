package com.seujogo.snakegame.repository;

import com.seujogo.snakegame.model.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface ScoreRepository extends JpaRepository<Score, Long> {
    
    // Encontrar scores por nome do jogador
    List<Score> findByPlayerNameOrderByScoreDesc(String playerName);
    
    // Top 10 melhores scores
    @Query("SELECT s FROM Score s ORDER BY s.score DESC LIMIT 10")
    List<Score> findTop10ByOrderByScoreDesc();
    
    // Verificar se player existe
    boolean existsByPlayerName(String playerName);
}