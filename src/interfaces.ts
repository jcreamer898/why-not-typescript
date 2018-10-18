export interface IGithubUser {
  login: string;
  id: number;
  avatar_url: string;
}

export interface IGithubUserResponse {
  login: string;
  id: number;
  url: string;
  location: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  updated_at: Date;
}

export interface IGithubRepositoryResponse {
  name: string;
}

export interface IGithubNotification {
  id: string;
  unread: boolean;
  reason: string;
  updated_at: Date;
  last_read_at: Date | null;
  subject: {
    title: string;
    url: string;
    last_comment_url: string;
    type: string;
  };
  repository: {
    id: string;
    name: string;
    full_name: string;
    html_url: string;
  }
}

export interface IActionList {
  [key: string]: () => Promise<void>;
}