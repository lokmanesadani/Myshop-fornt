import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "pages/Home/Home";
import { Box, styled, ThemeProvider } from "@mui/material";
import theme from "theme/theme";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Container = styled(Box)(() => ({
  maxWidth: "1200px",
  margin: "0 auto",
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
