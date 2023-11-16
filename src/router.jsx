import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/main/Main";
import NotFound from './pages/notFound/NotFound'
import Team from './pages/team/Team'
import { formSubmit } from "./api/resource/action";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main />, action:formSubmit},
      { path: "teamId/:teamId", element: <Team /> ,action:formSubmit}
    ],
    errorElement: <NotFound />
  }
]);

export default router;
