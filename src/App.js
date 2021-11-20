import {Route} from "react-router-dom";
import React from 'react';
import styled from "styled-components";
import Week from './Week';
import Detail from './Detail'

function App() {
  const [weekarr] = React.useState(["월","화","수","목","금","토","일"])

    return (
      <div className="App">
        <Container>
        <Route path="/" exact>
          <Week weekarr={weekarr} />
        </Route>
        <Route path = "/detail/:day" >
          <Detail day={weekarr} />
        </Route>
        </Container>
      </div>
    );
}

const Container = styled.div`
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  
`;



export default App;