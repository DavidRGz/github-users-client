import API from "./";

export const listUsers = ({ since = 0, per_page = 10 }) =>
  new Promise((resolve, reject) => {
    API.get("/listUsers", { params: { since, per_page } })
      .then(({ data: { data, status, message } }) => {
        if (status === 200) {
          resolve(data);
        } else {
          reject({ message });
        }
      })
      .catch(reject);
  });
