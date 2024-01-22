import forge from "node-forge";

export class Security {
  static encodeStringToBufferArray(plainString: string) {
    const base64String = window.btoa(plainString);
    const bufferArray = new Uint8Array(base64String.length);
    for (let i = 0; i < base64String.length; i++) {
      bufferArray[i] = base64String.charCodeAt(i);
    }
    return Array.from(bufferArray);
  }

  static decodeBufferArrayToString(arr: number[]) {
    const uint8Array = new Uint8Array(arr);
    const decoder = new TextDecoder("utf-8");
    const originalString = decoder.decode(uint8Array);
    //const plainString = window.atob(originalString);
    //return plainString;
    return originalString;
  }

  static encodeJsonToBufferArray(json: any) {
    const jsonString = JSON.stringify(json);
    return Security.encodeStringToBufferArray(jsonString);
  }

  static decodeBufferArrayToJson(arr: number[]) {
    const jsonString = Security.decodeBufferArrayToString(arr);
    return JSON.parse(jsonString);
  }

  static encryptRequestBody(pkid: string, publicEncryptionKey: string, data: any) {
    const {encryptedData, ...aesEncryptionCredentials} = Security.AES.encryptWithRandomKey(data);
    const aesEncryptionCredentialsStr = JSON.stringify(aesEncryptionCredentials);

    const rsaEncryptedAesCredentials = Security.RSA.encrypt(publicEncryptionKey, aesEncryptionCredentialsStr);

    const requestBody = {pkid: pkid, encryptedDecryptionCreds: rsaEncryptedAesCredentials, encryptedData: encryptedData};
    const requestBodyBuffer = Security.encodeJsonToBufferArray(requestBody);
    return requestBodyBuffer;
  }

  static AES = {
    encryptWithRandomKey: (data: any) => {
      const dataStr = JSON.stringify(data);
      const iv = forge.random.getBytesSync(16);
      const randomKey = forge.random.getBytesSync(32);
      const cipher = forge.cipher.createCipher("AES-CBC", randomKey);
      cipher.start({iv: iv});
      cipher.update(forge.util.createBuffer(dataStr));
      cipher.finish();
      const encrypted = cipher.output.getBytes();
      return {
        key: forge.util.encode64(randomKey),
        iv: forge.util.encode64(iv),
        encryptedData: forge.util.encode64(encrypted),
      };
    }
  }

  static RSA = {
    encrypt: (publicKey: string, payload: string): string => {
      const forgePublicKey = forge.pki.publicKeyFromPem(publicKey);
      const encryptedBytes = forgePublicKey.encrypt(payload, "RSA-OAEP", {
        md: forge.md.sha256.create(),
      });
      const encryptedData = forge.util.encode64(encryptedBytes);
      return encryptedData;
    }
  }
}

