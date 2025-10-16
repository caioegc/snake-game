package com.seujogo.snakegame.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "scores")
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "player_name")
    private String playerName;
    
    private Integer score;
    
    private LocalDateTime date;
    
    // Construtor vazio (obrigatório para JPA)
    public Score() {
        this.date = LocalDateTime.now();
    }
    
    // Construtor com parâmetros
    public Score(String playerName, Integer score) {
        this.playerName = playerName;
        this.score = score;
        this.date = LocalDateTime.now();
    }
    
    // Getters e Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getPlayerName() {
        return playerName;
    }
    
    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }
    
    public Integer getScore() {
        return score;
    }
    
    public void setScore(Integer score) {
        this.score = score;
    }
    
    public LocalDateTime getDate() {
        return date;
    }
    
    public void setDate(LocalDateTime date) {
        this.date = date;
    }
    
    // Método toString para debug
    @Override
    public String toString() {
        return "Score{" +
                "id=" + id +
                ", playerName='" + playerName + '\'' +
                ", score=" + score +
                ", date=" + date +
                '}';
    }
}