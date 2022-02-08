import { useEffect, useState } from 'react';
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
          newWordGrid[i].push({letter: "", state: "empty"}) //states: "correct", "incorrect", "wrong postition", "empty"
        }
      }
    }
    if(wordGrid === 0){
      initializeWordGrid()
    }
  })

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
