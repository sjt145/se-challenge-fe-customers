import {Storage} from "@/utils";

export class SessionUtils {
  static setAuthToken(authToken: string) {
    Storage.save("authToken", authToken);
  }

  static getAuthToken(): string | null {
    return Storage.get("authToken");
  }
}
