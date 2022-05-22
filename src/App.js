import Responses from "./components/Response";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import axios from "axios";
import openAIApi from "./api/openaiapi";

function App() {
  const [prompt, setPrompt] = useState("");
  const [completions, setCompletions] = useState([]);

  const submitForm = async (e) => {
    try {
      if (!prompt) {
        throw new Error("Empty Prompt!");
      }
      const response = await openAIApi.getCompletion(prompt);
      const updatedCompletions = [
        ...completions,
        { prompt: prompt, completion: response.choices[0].text },
      ];
      setCompletions(updatedCompletions);
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
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          id="input"
          label="Enter Prompt"
          multiline
          rows={10}
          sx={{ width: 500 }}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", my: 1 }}>
          <Button
            onClick={submitForm}
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
        {completions.map((completion) => {
          return <Responses promptCompletion={completion} />;
        })}
      </Box>
    </div>
  );
}
export default App;
