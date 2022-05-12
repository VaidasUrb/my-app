import './App.css';
import Car from './Components/002/Car';
import Square from './Components/002/Square';
import Tree from './Components/002/Tree';

import randColor from './Functions/randColor';
import rand from './Functions/rand';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PROPS</h1>
        <Car price={20000} width='50' maker='Opel' color='Blue' size='55' font='Times New Roman' backColor='red'></Car>
        <Car price={500000} width='90' maker='Volvo' color='Red' size='85' font='cursive' backColor='green'></Car>
        <Car price={70000} width='150' maker='MB' size='45' font='Georgia' backColor='yellow'></Car>
        <Tree size={8}></Tree>
        <Tree size={1}></Tree>
        <Tree size={5}></Tree>
        <Square color={randColor()} size={rand(50, 300)}></Square>
                <Square color={randColor()} size={rand(50, 300)}></Square>
                <Square color={randColor()} size={rand(50, 300)}></Square>
                <Square color={randColor()} size={rand(50, 300)}></Square>
                <Square color={randColor()} size={rand(50, 300)}></Square>

      </header>
    </div>
  );
}

export default App;
