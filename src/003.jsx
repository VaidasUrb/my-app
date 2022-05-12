import './App.css';
import CarsList from './Components/003/CarsLists';
import Rainbow from './Components/003/Rainbow';
import Rainbow2 from './Components/003/Rainbow2';
import Rainbow3 from './Components/003/Rainbow3';


const cars=['Ople', 'MB', 'Fiat', 'Kamaz']
const rainbow = [

    'crimson',

    'orange',

    'yellow',

    'green',

    'skyblue',

    'darkblue',

    'darkmagenta'

];

const rainbow2 = [

    {color: 'crimson', size: 30},

    {color: 'orange', size: 14},

    {color: 'yellow', size: 52},

    {color: 'green', size: 27},

    {color: 'skyblue', size: 40},

    {color: 'darkblue', size: 17},

    {color: 'darkmagenta', size: 22}

];

const rainbow3 = [

    {color: 'crimson', size: 30, pos: 'top'},

    {color: 'orange', size: 14, pos: 'top'},

    {color: 'yellow', size: 52, pos: 'bottom'},

    {color: 'green', size: 27, pos: 'bottom'},

    {color: 'skyblue', size: 40, pos: 'top'},

    {color: 'darkblue', size: 17, pos: 'bottom'},

    {color: 'darkmagenta', size: 22, pos: 'top'}

];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LISTS</h1>
        <CarsList cars={cars}></CarsList>
        <Rainbow colors={rainbow}></Rainbow>
        <div>
            <Rainbow2 colors={rainbow2}></Rainbow2>
        </div>
        <div>
            <Rainbow3 colors={rainbow3}></Rainbow3>
           
        </div>
      </header>
    </div>
  );
}

export default App;