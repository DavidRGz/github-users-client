import API from "./";

export const listRepos = ({ username, page = 1, per_page = 10 }) =>
  new Promise((resolve, reject) => {
    API.get("/listRepos", { params: { username, page, per_page } })
      .then(({ data: { data, status, message } }) => {
        if (status === 200) {
          resolve(data);
        } else {
          reject({ message });
        }
      })
      .catch(reject);
  });
