import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import { Stack, Box } from "@mui/material";
function App() {
  return (
    <div className="App">
      <Box>
          <Navbar />
        <Stack direction="row" justifyContent="space-between"  spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </div>
  );
}

export default App;
