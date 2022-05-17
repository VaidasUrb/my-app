import './App.scss';
import Antras from './Components/006/Antras';
import Kvadratas from './Components/006/Kvadratas';
import Raide from './Components/006/Raide';
import Vienas from './Components/006/Vienas';


const labas = [

    'L',

    'a',

    'b',

    'a',

    's',

    ',',

    ' ',

    'v',

    'a',

    'i',

    'k',

    'a',

    'i',

    '!'

];

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Labas</h1>
                <Vienas number={1} spalva='black'></Vienas>
                <Antras number={22} spalva='red'></Antras>
                <Kvadratas spalva2="pink" spalva1="gray" show="apskritimas"></Kvadratas>
                <div className='letters'>
                    {labas.map((zodis, i) => <Raide key={i} zodis={zodis} i={i}></Raide>)}
                </div>
            </header>
        </div >
    );
}


export default App;