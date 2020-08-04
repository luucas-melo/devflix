import config from '../config';

const URL_CATEGORIES = `${config.baseUrl}categorias`;

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if (response.ok) {
        const answer = await response.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const answer = await response.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}
export default {
  getAllWithVideos,
  getAll,
};
