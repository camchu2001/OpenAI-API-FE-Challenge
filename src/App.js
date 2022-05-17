import logo from "./logo.svg";
import Responses from "./components/Response";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function App() {
  const onSubmit = (e) => {
    e.preventDefault();
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
          <Button color="primary" sx={{ width: 100 }} variant="contained">
            Submit
          </Button>
        </Box>
        <Responses />
      </Box>
    </div>
  );
}
export default App;
