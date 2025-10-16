import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Game.css';

const GameBoard = () => {
  // Configurações do jogo
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState('RIGHT');
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(150);

  // Tamanho do grid
  const gridSize = 20;

  // Gerar comida aleatória
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    };
    setFood(newFood);
  }, [gridSize]);

  // Inicializar jogo
  useEffect(() => {
    generateFood();
  }, [generateFood]);

  // Reiniciar jogo
  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDirection('RIGHT');
    setGameOver(false);
    setScore(0);
    setSpeed(150);
    generateFood();
  };

  // Movimentação da cobrinha
  const moveSnake = useCallback(() => {
    if (gameOver) return;

    setSnake(prevSnake => {
      const newSnake = [...prevSnake];
      const head = { ...newSnake[0] };

      // Mover cabeça baseado na direção
      switch (direction) {
        case 'UP': head.y -= 1; break;
        case 'DOWN': head.y += 1; break;
        case 'LEFT': head.x -= 1; break;
        case 'RIGHT': head.x += 1; break;
        default: break;
      }

      // Verificar colisão com paredes
      if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
        setGameOver(true);
        return prevSnake;
      }

      // Verificar colisão com próprio corpo
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return prevSnake;
      }

      // Adicionar nova cabeça
      newSnake.unshift(head);

      // Verificar se comeu comida
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        generateFood();
        
        // Aumentar velocidade a cada 50 pontos
        if ((score + 10) % 50 === 0) {
          setSpeed(prev => Math.max(50, prev - 10));
        }
      } else {
        // Remover cauda se não comeu
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, generateFood, score, gridSize]);

  // Controles do teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
        case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
        case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
        case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  // Game loop
  useEffect(() => {
    if (!gameOver) {
      const gameInterval = setInterval(moveSnake, speed);
      return () => clearInterval(gameInterval);
    }
  }, [moveSnake, gameOver, speed]);

  // Renderizar grid
  const renderGrid = () => {
    const grid = [];
    
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;
        
        let cellClass = 'grid-cell';
        if (isSnake) cellClass += ' snake';
        if (isFood) cellClass += ' food';
        
        grid.push(
          <div key={`${x}-${y}`} className={cellClass} />
        );
      }
    }
    
    return grid;
  };

  return (
    <div className="game-container">
      <div className="game-info">
        <h2>Jogo da Cobrinha</h2>
        <div className="score">Pontuação: {score}</div>
        {gameOver && (
          <div className="game-over">
            Game Over! 🐍
            <button className="restart-btn" onClick={restartGame}>
              Jogar Novamente
            </button>
          </div>
        )}
      </div>
      
      <div 
        className="game-board"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 20px)` }}
      >
        {renderGrid()}
      </div>

      <div className="controls-info">
        Use as setas do teclado para mover a cobrinha
      </div>
    </div>
  );
};

export default GameBoard;