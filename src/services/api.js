const API_BASE_URL = 'http://localhost:8080/api';

export const scoreAPI = {
  // Salvar score no backend
  saveScore: async (playerName, score) => {
    try {
      const response = await fetch(`${API_BASE_URL}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ playerName, score }),
      });
      return await response.json();
    } catch (error) {
      console.error('Erro ao salvar score:', error);
    }
  },

  // Buscar ranking
  getLeaderboard: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/scores/leaderboard`);
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar ranking:', error);
      return [];
    }
  }
};