const url = `/api/artbuddies`;
import fetch from 'isomorphic-fetch';

export default {
  read: () => {

    return fetch(`${url}?isActive=true`)
      .then(r => r.json());

  },

  exist: userId => {

    return fetch(`${url}?userId=${userId}`)
      .then(r => r.json());

  },

  create: (userId, rating, name) => {
    console.log(userId);
    console.log(rating);
    const method = `POST`;
    const body = new FormData();
    body.append(`userId`, userId);
    const ratingJson = JSON.stringify(rating);
    body.append(`rating`, ratingJson);
    body.append(`name`, name);

    return fetch(url, {method, body})
      .then(r => r.json());
  },

  update: (_id, rating) => {
    const method = `PATCH`;
    const ratingJson = JSON.stringify(rating);
    const body = new FormData();
    body.append(`rating`, ratingJson);

    return fetch(`${url}/${_id}`, {method, body});
  },

  delete: _id => {
    const method = `DELETE`;
    return fetch(`${url}/${_id}`, {method});
  }
};
