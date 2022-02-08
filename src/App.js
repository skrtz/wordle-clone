import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [wordGrid, setWordGrid] = useState([])

  useEffect(() => {
    function initializeWordGrid() {
      let newWordGrid = [];
      for(let i = 0; i < 6; i++) {
        newWordGrid.push([])
      }

      for(let i = 0; i < 6; i++){
        for(let j = 0; j < 5; j++){
          newWordGrid[i].push({ letter: "a", state: "empty" }) //states: "correct", "incorrect", "wrong postition", "empty"
        }
      }
      setWordGrid(newWordGrid);
    }
    
    // if(wordGrid === 0){
      initializeWordGrid()
    // }
  })

  return (
    <Div>
      {wordGrid.map((row) => (
        <RowWrapper>
          {row.map((col) => (
            <Letter>{col.letter}</Letter>
          ))}
        </RowWrapper>
      ))}
    </Div>

  )
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const RowWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Letter = styled.div`
  font-size: 56px;
  background-color: grey;
  padding: 8px;

`;

export default App;
