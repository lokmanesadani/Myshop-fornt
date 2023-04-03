import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "pages/Home/Home";
import { Box, styled, ThemeProvider } from "@mui/material";
import theme from "theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const Container = styled(Box)(() => ({
  maxWidth: "1300px",
  margin: "0 auto",
}));

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container>
          <RouterProvider router={router}></RouterProvider>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
