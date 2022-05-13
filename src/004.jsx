import './App.css';
import FatDog from './Components/004/FatDog';
import FatCat from './Components/004/FatCat';
import Lake from './Components/004/Lake';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>State</h1>
                <FatCat color="Brown"></FatCat>
                <FatDog color="Blue"></FatDog>
                <Lake></Lake>
            </header>
        </div>
    );
}

export default App;