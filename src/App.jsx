import './App.scss';
import { useEffect, useState } from 'react'
import Kvadratukai from './Components/009/Kavdratukai';
import axios from 'axios';
import User from './Components/009/User';
import User2 from './Components/009/User2';
import Title from './Components/009/Title';



function App() {

    const [sq, setSq] = useState([]);

    const add = () => setSq(s => [...s, 1]);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
                setUsers(res.data);
            })

    }, []);


    const [user2s, setUser2s] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users?limit=10')
            .then(res => {
                console.log(res.data.users);
                setUser2s(res.data.users);
            })

    }, []);


    const [title, setTitle] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res.data);
                setTitle(res.data);
            })

    }, []);



    return (
        <div className="App">
            <header className="App-header">
                <h1>USE eFFeCt</h1>

                <button onClick={add}>add</button>
                <div className="square-garden">
                    {
                        sq.map((_, i) => <Kvadratukai key={i} i={i}></Kvadratukai>)
                    }
                </div>
                {
                    users.map(u => <User key={u.id} user={u}></User>)
                }

                {
                    user2s.map(u => <User2 key={u.id} user2s={u}></User2>)
                }

                {
                    title.sort((a, b) => b.title.length - a.title.length).map((u, i) => <Title key={u.id} title={u} index={i}></Title>)
                }


            </header>
        </div>
    );

}


export default App;
