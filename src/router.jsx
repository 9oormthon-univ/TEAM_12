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
import { getTeamInfo } from "./api/resource/loader";

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
        // loader: getTeamInfo, 현재는 api로 정보를 불러올 수 없고 loader로 아무것도 못받아오면 페이지
        // 자체가 안떠서 주석 처리 해놨습니다 
        // 설명은 api/resource/loader에도 있습니다 참고해 주세요
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
