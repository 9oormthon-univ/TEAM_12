import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../../store/modal/modalSlice";
import {s} from "./style";

import TeamCommonAlert from "../../team/teamCommon/TeamCommonAlert";
import GoalColumn from "../goalColumn/GoalColumn";
import CenterModal from "../../modals/centerModal/CenterModal";

function GoalSchedule () {

    const dispatch = useDispatch();
    const {showModal} = useSelector(s => s.modal);

    const goals = [
        {
            id:1,
            text : 'Something Todo Goal',
            width : 10,
            position : 0
        },
        {
            id:2,
            text : 'Goal1',
            width : 5,
            position : 10
        },
        {
            id:3,
            text : 'Goal2',
            width : 20,
            position : 25
        },
    ];

    const startDay = new Date(2023, 9, 14);
    const endDay = new Date(2023, 10, 14);

    const dateStringMaker = (date) => {
        return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    }

    const addInfo =  [ startDay , endDay ].map(e=> e.toISOString().split('T')[0])


    const showMakeGoalModal = () =>{
        dispatch(modalAction.setShowModal({type:'maker',title:'Goal',addInfo}))
    }

    return(
        <>
            {showModal && <CenterModal/> }
            <TeamCommonAlert/>
            <s.GoalDurationDiv>
                <s.GoalDurationText>{dateStringMaker(startDay)}</s.GoalDurationText>
                <s.GoalDurationText>{dateStringMaker(endDay)}</s.GoalDurationText>
            </s.GoalDurationDiv>
            <s.GoalList>
                {goals.length > 0 && 
                goals.map((e,i)=><GoalColumn key={e.id} goal={e} index={i}/>)}
                <s.AddGoalDiv>
                    <s.AddGoalBtn onClick={showMakeGoalModal}>
                        <s.AddGoalText>Goal 만들기</s.AddGoalText>
                    </s.AddGoalBtn>
                </s.AddGoalDiv>
            </s.GoalList>
        </>
    )

}

export default GoalSchedule