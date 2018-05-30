import { fetchApi } from "./fetchApi";

interface IGithubUserResponse {
  login: string;
  id: number;
  url: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  updated_at: Date;
}

interface IGithubRepositoryResponse {

}

fetchApi<IGithubUserResponse>("https://api.github.com/users/jcreamer898")
  .then((user) => {
    console.log(`${user.login} has ${user.followers} followers.`);
  });

  fetchApi<IGithubRepositoryResponse>("https://api.github.com/users/jcreamer898/repositories/")
  .then((repository) => {
    console.log(`${repository} has ${repository} followers.`);
  });
