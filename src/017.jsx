import './App.scss';
import './bootstrap.css';
import { useReducer, useState } from 'react';
import colorReducer from './Reducers/colorReducer';
import textReducer from './Reducers/textReducer';
import listReducer from './Reducers/listReducer';


function App() {

    const [color, dispachColor] = useReducer(colorReducer, 'yellow');
    const [text, dispachText] = useReducer(textReducer, '0000');
    const [list, dispachList] = useReducer(listReducer, []);
    const [colorInput, setColorInput] = useState('#000111');
    const [textInput, setTextInput] = useState('');
    const [filterText, setFilterText] = useState('0');



    const doBlack = () => {
        const action = {
            type: 'make_black'
        }
        dispachColor(action)
    }

    const doBlue = () => {
        const action = {
            type: 'make_blue'
        }
        dispachColor(action)
    }


    const doBlueBlack = () => {
        const action = {
            type: 'make_blue_black'
        }
        dispachColor(action)
    }


    const doRandColor = () => {
        const action = {
            type: 'make_randColor'
        }
        dispachColor(action)
    }


    const doInputColor = () => {
        const action = {
            type: 'make_input',
            payload: colorInput
        }
        dispachColor(action);
    }


    const doRandText = () => {
        const action = {
            type: 'rand_text'

        }
        dispachText(action);
    }



    const doInputText = () => {
        const action = {
            type: 'input_text',
            payload: textInput
        }
        dispachText(action);
    }


    const newList = () => {
        const action = {
            type: 'new_list'
        }
        dispachList(action);
    }


    const sortList = () => {
        const action = {
            type: 'sort_list'
        }
        dispachList(action);
    }


    const addNew = () => {
        const action = {
            type: 'add_list'
        }
        dispachList(action);
    }


    const filter = () => {
        const action = {
            type: 'filter_list'
        }
        dispachList(action);
    }


    const filterLess = () => {
        const action = {
            type: 'filterLess_list'
        }
        dispachList(action);
    }



    const showAll = () => {
        const action = {
            type: 'showAll_list'
        }
        dispachList(action);
    }




    const defaultList = () => {
        const action = {
            type: 'def_sort_list'
        }
        dispachList(action);
    }



    const filterInput = () => {
        const action = {
            type: 'input_filter_list',
            payload: filterText
        }
        dispachList(action);
    }


    return (
        <div className="App">
            <header className="App-header">
                {
                    list.map((d, i) => d.show ? <div key={i} style={{ color: d.color }}>{d.number}</div> : null)
                }
                <h1 style={{ backgroundColor: color }}>{text}</h1>
                <div className='kvc'>
                    <button className='a' onClick={doBlack}>Black</button>
                    <button className='a' onClick={doBlue}>Blue</button>
                    <button className='a' onClick={doBlueBlack}>Blue/Black</button>
                    <button className='a' onClick={doRandColor}>Random Color</button>
                </div>
                <div className="form-group">
                    <label>Color input</label>
                    <input type="color" className="form-control" onChange={e => setColorInput(e.target.value)} value={colorInput}></input>
                    <button className="a" onClick={doInputColor}>Input</button>
                </div>
                <div className='kvc'>
                    <button className='a' onClick={doRandText}>Random Text</button>
                    <input type="text" className="form-control" onChange={e => setTextInput(e.target.value)} value={textInput}></input>
                    <button className="a" onClick={doInputText}>Input</button>
                    <button className="a" onClick={newList}>New List</button>
                    <button className="a" onClick={sortList}>Sort</button>
                    <button className="a" onClick={defaultList}>DEFAULT SORT LIST</button>
                    <button className="a" onClick={addNew}>Black Number</button>
                    <button className="a" onClick={filter}>More 500</button>
                    <button className="a" onClick={filterLess}>Less 400</button>
                    <button className="a" onClick={showAll}>Show All</button>
                </div>
                <div className="form-group">
                    <label>Number input</label>
                    <input type="number" min='0' max='1000' step='50' className="form-control" onChange={e => setFilterText(e.target.value)} value={filterText}></input>
                    <button className="a" onClick={filterInput}>Number Input</button>
                </div>
            </header>
        </div>
    );
}

export default App;
