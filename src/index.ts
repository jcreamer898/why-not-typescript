import * as dotenv from "dotenv";
import { fetchApi } from "./fetchApi";
import {
  IGithubNotification,
  IGithubUserResponse,
  IGithubRepositoryResponse,
  IActionList,
} from "./interfaces";

dotenv.config();

const [, , action] = process.argv;
const { GITHUB_ACCESS_TOKEN } = process.env;

const fetchNotifications = async () => {
  const events = await fetchApi<IGithubNotification[]>(
    `https://api.github.com/notifications?access_token=${GITHUB_ACCESS_TOKEN}`
  );

  console.log("My Github Notifications...\n");

  events.map(e => {
    console.log(e.subject.title);
    console.log(e.subject.url);
    console.log("\n");
  });
};

(async function() {
  const actions: IActionList = {
    notifications: async () => {
      await fetchNotifications();
    },
    user: async () => {
      const user = await fetchApi<IGithubUserResponse>(
        "https://api.github.com/users/jcreamer898"
      );
      console.log(`${user.login} has ${user.followers} followers.`);
    },
    repos: async () => {
      const repos = await fetchApi<IGithubRepositoryResponse[]>(
        "https://api.github.com/users/jcreamer898/repos"
      );
      repos.map(r => console.log(r.name));
    }
  };

  const fn = actions[action];

  if (fn) {
    await fn();
  } else {
    console.log(`Invalid action: ${action}`);
  }
})();
