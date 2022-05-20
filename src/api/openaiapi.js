import axios from "axios";
import env from "../common/config";

class OpenAIApi {
  constructor() {
    this.client = axios.create({
      baseURL: "https://api.openai.com/v1/engines/text-curie-001/completions",
      headers: {
        Authorization: `Bearer ${env.REACT_APP_OPENAI_API_KEY}`,
      },
    });
  }

  async getCompletion() {
    try {
      const response = await this.client.post("", {
        prompt: "Tell me a joke",
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

const openAIApi = new OpenAIApi();
export default openAIApi;
