import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/main/Main";
import NotFound from "./pages/notFound/NotFound";
import Team from "./pages/team/Team";
import { createGoalTodoMem , createTeam } from "./api/resource/action";
import Goal from "./pages/goal/Goal";
import Login from "./pages/login/Login";
import SignUP from "./pages/login/SignUp";
import Memori from "./pages/team/Memori";
import TodoPage from "./pages/todo/TodoPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main />, action: createTeam },
      {
        path: "teamId/:teamId",
        element: <Team />,
        action: createGoalTodoMem,
        id: "team",
        children: [
          {
            path: "goalId/:goalId",
            element: <Goal />,
            children: [
              {
                path: "todoId/:todoId",
                element: <TodoPage />
              }
            ]
          }
        ]
      },
      { path: "/memori/:teamId", element: <Memori /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUP /> }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
