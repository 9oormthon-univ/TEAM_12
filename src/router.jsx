import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Main from "./pages/main/Main";
import NotFound from './pages/notFound/NotFound'
import Team from './pages/team/Team'
import { formSubmit } from "./api/resource/action";
import Goal from "./pages/goal/Goal";
import TodoPage from "./pages/todo/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main />, action:formSubmit},
      { path: "teamId/:teamId", element: <Team /> ,action:formSubmit, id:'team' ,
        children :[
          {
            path :'goalId/:goalId', element:<Goal/>, id:'goal', children:
            [
              {
                path :'todoId/:todoId',element:<TodoPage/> ,id:'todo'
              }
            ]
          },
          
        ]}
    ],
    errorElement: <NotFound />
  }
]);

export default router;
