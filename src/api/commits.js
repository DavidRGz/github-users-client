import API from "./";

export const listCommits = ({ owner, repo, page = 1, per_page = 10 }) =>
  new Promise((resolve, reject) => {
    API.get("/listCommits", { params: { owner, repo, page, per_page } })
      .then(({ data: { data, status, message } }) => {
        if (status === 200) {
          resolve(data);
        } else {
          reject({ message });
        }
      })
      .catch(reject);
  });
