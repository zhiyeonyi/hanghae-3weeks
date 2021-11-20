import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";


const Detail = (props) => {
    console.log(props);
    const history = useHistory();
    const day = useParams();
    // console.log(day.day);
    const circle_count = Array.from({length: 5 },(v,i)=> i);
    const my_wrap = React.useRef([]);
    
    console.log(my_wrap);

    const hoverEvent = (t) => {
        if(t.target == my_wrap.current[0]){
        my_wrap.current[0].style.background = "yellow";
        }
        }

        React.useEffect(() =>{
            my_wrap.current[0].addEventListener("click", hoverEvent);

            return () => {
                my_wrap.current.removeEventListener("click",hoverEvent);
            }
        },[]);

    return ( 
       <div>
        <Title>
          <span>
           { day.day}요일
          </span>
          평점 남기기
        </Title>
        <FiveCircle >       
            {circle_count.map((n,i) => {
                    return (
                    <div key={i}>
                    <Circle ref= {(t) => (my_wrap.current.push(t))} />
                    </div>
                    );
                })}
        </FiveCircle>
        {/* <FiveCircle >       
            <Circle ref= {my_wrap} />
            <Circle ref= {my_wrap} />
        </FiveCircle> */}
    
        <GoWeek onClick={() => {
            history.push("/");
            }}>
                평점 남기기
            </GoWeek>
        </div>
    );
}

const Title = styled.h3`
    span { 
        color: white;
        background-color: orange;
        padding: 0.5rem;
        border-radius: 5px;
    }
    text-align: center;
`
const FiveCircle=styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;
`

const Circle = styled.div`
  display: flex;
  width: 30px; 
  height: 30px; 
  border-radius: 30px; 
  margin: 5px; 
  background-color: lightgray;
`;

const GoWeek = styled.button`
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: white;
`


export default Detail;
