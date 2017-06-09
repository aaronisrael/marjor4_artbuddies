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

  create: userId => {

    const method = `POST`;
    const body = new FormData();
    body.append(`userId`, userId);

    return fetch(url, {method, body})
      .then(r => r.json());

  },

  delete: _id => {
    const method = `DELETE`;
    return fetch(`${url}/${_id}`, {method});
  }
};
