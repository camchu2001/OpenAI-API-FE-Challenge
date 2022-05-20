import { cleanEnv, str } from "envalid";

const env = cleanEnv(process.env, {
  REACT_APP_OPENAI_API_KEY: str(),
});

export default env;
