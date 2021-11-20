import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Week = (props) => {
  const history =useHistory();
  const my_weekarr= props.weekarr;
  const [count] = React.useState(5);
  console.log(count)
  const circle_count = Array.from({length: count },(v,i)=> i);
  const random_num= Math.floor(Math.random()*5+1);
  console.log(random_num)


  return (
      <ListStyle>
        <h3>내 일주일은?</h3>
        {my_weekarr.map((weekarr, i) => {
          return (
            <ItemStyle key={i}>
              {weekarr} {circle_count.map((n,i) => {
                return (
                <div key={i}>
                  <Circle/>
                </div>
                );
              })} <GoDetail to={`/detail/${weekarr}`} />
            </ItemStyle>
          );
        })}

      </ListStyle>   
  );
};

const ListStyle = styled.div`
  flex-direction: column;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  margin: 1rem 0px; 
  width: 100%; 
`;

const ItemStyle = styled.div`
  padding: 8x;
  display: flex;
  justify-content: center; 
  align-items: center; 
  margin: 1rem 0px; 
  width: 100%;
  font-weight: bold;
  h3 {
    text-align: center;
  }
`;

const Circle = styled.div`
  display: flex;
  width: 30px; 
  height: 30px; 
  border-radius: 30px; 
  margin: 5px; 
  background-color: lightgray;
  flex-direction: row;
`;

const GoDetail = styled(Link)`
  appearance: none; 
  background-color: transparent; 
  border-color: transparent purple; 
  width: 0px; 
  height: 0px; 
  border-top-width: 1rem; 
  border-top-style: solid; 
  border-bottom-width: 1rem; 
  border-bottom-style: solid; 
  border-left-width: 1.6rem; 
  border-left-style: solid; 
  color: purple; 
  cursor: pointer;
`

// const WeekDay = styled.div`
    
// ;

export default Week; 