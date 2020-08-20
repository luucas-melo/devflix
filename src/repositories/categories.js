import config from '../config';

const URL_CATEGORIES = `${config.baseUrl}categorias`;

function createCategories(categoryObject) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(categoryObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const answer = await response.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados :(');
    });
}

function deleteCategories(id) {
  return fetch(`${URL_CATEGORIES}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(async (response) => {
    if (response.ok) {
      const answer = await response.json();
      return answer;
    }

    throw new Error('Não foi possível deletar a categoria :(');
  });
}

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
  createCategories,
  deleteCategories,
  getAllWithVideos,
  getAll,
};
