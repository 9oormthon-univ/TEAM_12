import { Outlet, useParams } from 'react-router-dom'
import {s} from './styles'

function Goal(){

  const param = useParams();

  return(
    <>
      <s.Backdrop to={'..'}/>
      <s.Content>
        {!param.todoId && <h1>goal</h1>}
        <main>
          <Outlet/>
        </main>
      </s.Content>
    </>

  )

}

export default Goal