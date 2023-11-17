import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/main/Main";
import NotFound from "./pages/notFound/NotFound";
import Team from "./pages/team/Team";
import { createGoalTodoMem, createTeam } from "./api/resource/action";
import Goal from "./pages/goal/Goal";
import Login from "./pages/login/Login";
import SignUP from "./pages/login/SignUp";
import TodoPage from "./pages/todo/TodoPage.jsx";
import Report from "./pages/team/Report.jsx";

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
      { path: "/report/:teamId", element: <Report /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUP /> }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
