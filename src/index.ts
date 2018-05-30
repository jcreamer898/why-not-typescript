import request from "request-promise-native";

interface IGithubUser {
  login: string;
  id: number;
  avatar_url: string;
}

request("https://api.github.com/users/jcreamer898", {
  json: true,
  headers: {
    "User-Agent": "node"
  },
}).then((user: IGithubUser) => {
    console.log(user.login);
  });
