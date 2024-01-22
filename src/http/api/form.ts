import {Security} from "@/utils/Security";
import * as ApiClient from "../apiClient"

export default class Form {
  static async submit(pkid: string, publicEncryptionKey: string, data: any) {
    // const requestBodyBuffer = Security.encryptRequestBody(pkid, publicEncryptionKey, data);
   console.log("add logger here")
  }

  static async getCustomerData() {
    const response = await ApiClient.getApiClient().sendGetRequest("/settings.json", null, null);
    return response;
  }
}
