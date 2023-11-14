import {s} from "./style";

function GoalColumn ({goal,index}) {

    const lines = [10,20,30,40].map(e=><s.GoalLines key={e} $left={e}/>)

    return(
        <s.GoalColumn>
                {lines}
            <s.Today $left={30}>
                <s.TodayDot $rad={index === 0 ? 50 : 0} />
                <s.TodayLine $left={30} />
            </s.Today>
            <s.Goal $width= {goal.width} $position={goal.position}>
                <s.GoalInlineText>{goal.text}</s.GoalInlineText>
            </s.Goal>
        </s.GoalColumn>
    )
}

export default GoalColumn