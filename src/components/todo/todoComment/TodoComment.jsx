import {s} from './styles';
import {faHeart} from "@fortawesome/free-solid-svg-icons";

function TodoComment({content}){

  const isLiked = content.feelingCheckMemberId.length > 0;

  const [date , time] = content.createdTime.split('T');


  const dateStringMaker = (date) =>{
    const arr = date.split('-')
    return `${arr[0]}년 ${arr[1]}월 ${arr[2]}일`
  }; 


  return(
    <s.CommentWrappper>
      <s.Column/>
      <s.TextDiv>
        {dateStringMaker(date)} {time.slice(0,5)}
        <s.CommentLike>
          <s.Comment>
            {content.content}
          </s.Comment>
          <s.LikeDiv>
            {isLiked ? <s.LikedBtn icon={faHeart} /> : 
              <s.LikeBtn src='/Heart.png'/>}
            {content.feelingCheckMemberId.length}
          </s.LikeDiv>
        </s.CommentLike>
      </s.TextDiv>
    </s.CommentWrappper>
  )
}

export default TodoComment