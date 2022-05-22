import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

function Responses({ promptCompletion }) {
  return (
    <Box
      sx={{
        borderColor: "black",
        bgcolor: "#eeeeee",
        width: 500,
        borderRadius: 2,
        marginTop: 1,
        marginBottom: 2,
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography sx={{ fontWeight: "bold" }} variant="p">
          Prompt:{" "}
        </Typography>

        <Box sx={{ display: "inline" }}>
          <Typography variant="p">{promptCompletion.prompt}</Typography>
        </Box>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography sx={{ fontWeight: "bold" }} variant="p">
          Response:
        </Typography>
        <Box sx={{ display: "inline" }}>
          <Typography variant="p">{promptCompletion.completion}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Responses;
