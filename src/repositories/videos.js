import config from '../config';

const URL_VIDEOS = `${config.baseUrl}videos`;

function create(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (response) => {
      if (response.ok) {
        const answer = await response.json();
        return answer;
      }
      throw new Error('Não foi possível pegar os dados');
    });
}
export default {
  create,
};
