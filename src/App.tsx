import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "pages/Home/Home";
import { ThemeProvider } from "@mui/material";
import theme from "theme/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NavBarLayout from "layouts/NavBarLayout/NavBarLayout";
import { GoogleOAuthProvider } from "@react-oauth/google";

const router = createBrowserRouter([
  // route to rediect to home page

  {
    path: "/store",
    element: <NavBarLayout />,
    children: [
      {
        path: "/store",
        element: <Navigate to="/store/home" />,
      },
      {
        path: "/store/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/store/home" />,
  },
]);

const queryClient = new QueryClient();
function App() {
  console.log(import.meta.env.VITE_GOOGLE_CLIENT_ID);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
