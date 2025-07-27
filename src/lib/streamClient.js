import { StreamVideoClient } from "@stream-io/video-react-sdk";

let client = null;

export const getStreamVideoClient = ({ apiKey, user, token }) => {
  if (!client) {
    client = new StreamVideoClient({
      apiKey,
      user,
      token,
    });
  }

  return client;
};
