import Responses from "./components/Response";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import env from "./common/config";

import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const getResponse = async (e) => {
    const url = "https://api.openai.com/v1/engines/text-curie-001/completions";

    try {
      const response = await axios.post(
        url,
        {
          prompt: "Tell me a joke",
        },
        {
          headers: {
            Authorization: `Bearer ${env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Box sx={{ display: "grid", width: 500, mx: "auto", marginTop: 1 }}>
        <Box>
          <Typography variant="h3">Fun With AI</Typography>
        </Box>
        <TextField
          id="outlined-multiline-flexible"
          label="Enter Prompt"
          multiline
          rows={10}
          sx={{ width: 500 }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", my: 1 }}>
          <Button
            onClick={getResponse}
            color="primary"
            sx={{ width: 100 }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>

        <Box>
          <Typography variant="h4">Responses</Typography>
        </Box>
        <Responses />
      </Box>
    </div>
  );
}
export default App;
