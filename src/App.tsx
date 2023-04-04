import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "pages/Home/Home";
import { Box, styled, ThemeProvider } from "@mui/material";
import theme from "theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBarLayout from "layouts/NavBarLayout";
const router = createBrowserRouter([
  {
    path: "/store",
    element: <NavBarLayout />,
    children: [
      {
        path: "/store/home",
        element: <Home />,
      },
    ],
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
