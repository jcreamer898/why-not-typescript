import request from "request-promise-native";

export async function fetchApi<T> (url: string) {
  const response: T = await request(url, {
    json: true,
    headers: {
      "User-Agent": "node"
    },
  });

  return response;
};
