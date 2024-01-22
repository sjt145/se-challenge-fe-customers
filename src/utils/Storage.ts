import SecureLS from "secure-ls";

const secureLS = new SecureLS({encodingType: "aes"});

export class Storage {
  static get(key: string) {
    try {
      return secureLS.get(key);
    } catch (error) {
      throw error;
    }
  }

  static getJson<T>(key: string): T | null {
    try {
      const str = Storage.get(key);
      if (str) {
        return JSON.parse(str);
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static save(key: string, json: string | number | object) {
    if (typeof json === "object") {
      secureLS.set(key, JSON.stringify(json));
    } else {
      secureLS.set(key, json);
    }
  }

  static delete(key: string) {
    secureLS.remove(key);
  }

  static clear() {
    localStorage.clear();
  }
}
