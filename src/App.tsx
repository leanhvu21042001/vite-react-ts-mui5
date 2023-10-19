import { Box } from "@mui/material";
import "./App.css";
import { reactSVG } from "./assets/image";
import LabelBottomNavigation from "./components/LabelBottomNavigation";

function App() {
  return (
    <Box id="App">
      <img src={reactSVG} />
      <h1>App</h1>
      <LabelBottomNavigation />
    </Box>
  );
}

export default App;
