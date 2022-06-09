import './App.scss';
import { useEffect, useReducer, useState } from 'react'
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';

function App() {

    const [books, dispachBooks] = useReducer(booksReducer, []);
    const [reload, setReload] = useState(false)

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(res => {
                const action = {
                    type: 'get_from_server',
                    payload: res.data
                }
                dispachBooks(action)
            })
    }, [reload]);


    const sortByName = () => {
        const action = {
            type: 'sort_by_name'
        };
        dispachBooks(action);
    }


    const sortByDefault = () => {
        const action = {
            type: 'sort_by_default'
        };
        dispachBooks(action);
    }


    const priceMore = () => {
        const action = {
            type: 'price_more'
        };
        dispachBooks(action);
    }


    const showAll = () => {
        const action = {
            type: 'showAll'
        }
        dispachBooks(action);
    }


    const doReload = () => {
        const action = {
            type: 'reload'
        };
        dispachBooks(action);
        setReload(r => !r);
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Books</h1>
                <div className='kvc'>
                    {
                        books.length ? books.map(b => b.show ? <div key={b.id}>{b.title}{b.price} Eur</div> : null) : <h2>Loading...</h2>
                    }
                </div>
                <div>
                    <button className="a" onClick={sortByName}>Sort by Name</button>
                    <button className="a" onClick={sortByDefault}>Sort by Default</button>
                    <button className="a" onClick={priceMore}>Price More 13 Euro</button>
                    <button className="a" onClick={showAll}>Show All</button>
                    <button className="a" onClick={doReload}>Reload</button>
                </div>
            </header>
        </div>
    );
}

export default App;
