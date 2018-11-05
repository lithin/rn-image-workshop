// @flow
import { atob } from "Base64";

export const convertBase64ToByteArray = (b64Data: string) => {
  const byteCharacters = atob(b64Data);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  return new Uint8Array(byteNumbers);
};

export const getAWSAccessTokens = () => ({
  accessKeyId: "xyz",
  secretAccessKey: "xyz"
});
