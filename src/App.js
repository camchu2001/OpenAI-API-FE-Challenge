import Responses from "./components/Response";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import axios from "axios";
import openAIApi from "./api/openaiapi";
import suggestions from "./api/openaiSuggestion";

function App() {
  const [prompt, setPrompt] = useState("");
  const [completions, setCompletions] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("data");
    setCompletions(saved ? JSON.parse(saved) : []);
  }, []);

  const submitForm = async (e) => {
    try {
      if (!prompt) {
        throw new Error("Empty Prompt!");
      }
      const response = await openAIApi.getCompletion(prompt);
      const updatedCompletions = [
        ...completions,
        {
          prompt: prompt,
          completion: response.choices[0].text,
          created: response.created,
        },
      ];
      updatedCompletions.sort((a, b) =>
        a.created > b.created ? -1 : b.created > a.created ? 1 : 0
      );
      localStorage.setItem("data", JSON.stringify(updatedCompletions));

      setCompletions(updatedCompletions);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangeSelectSuggestion = (e) => {
    setPrompt(e.target.value);
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

        <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
          <FormControl sx={{ width: 130 }}>
            <InputLabel id="suggest">Suggestion</InputLabel>
            <Select
              onChange={onChangeSelectSuggestion}
              id="suggest"
              label="Suggestion"
            >
              {suggestions.map((suggestion) => {
                return (
                  <MenuItem value={suggestion.prompt}>
                    {suggestion.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <Button
            onClick={submitForm}
            color="primary"
            sx={{ width: 120 }}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
        <Box>
          <Typography variant="h4">Responses</Typography>
        </Box>
        {completions.map((completion) => {
          return (
            <Responses key={completion.created} promptCompletion={completion} />
          );
        })}
      </Box>
    </div>
  );
}
export default App;
