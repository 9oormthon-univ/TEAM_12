import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/main/Main";
import NotFound from './pages/notFound/NotFound'
import Team from './pages/team/Team'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Main /> },
      { path: "team/:teamId", element: <Team /> }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
