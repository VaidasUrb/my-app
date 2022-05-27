import { useState } from "react";

function Lists() {

    const sizes = [
        'XS',
        'S',
        'M',
        'L',
        'XL',
        'XXL'
    ];

    const [show, setShow] = useState(false);

    return (
        <div className="lc">
            <button className="a" onClick={() => setShow(s => !s)}>Show</button>
            <div className="list">
                {
                    sizes.map((s, i) => <div key={i}>{s}</div>)
                }
            </div>
            <div className="list">
                {
                    sizes.map((s, i) => (
                        i % 2 ? <div key={i} style={{ color: 'yellow' }}>{s}</div> :
                            <div key={i} style={{ color: 'red' }}>{s}</div>
                    )
                    )
                }
            </div>
            <div className="list">
                {
                    sizes.map((s, i) => (
                        i % 2 ? <div key={i} style={{ color: 'yellow' }}><i>{s}</i></div> :
                            <div key={i} style={{ color: 'red' }}><u>{s} </u></div>
                    )
                    )
                }
            </div>
            <div className="list">
                {
                    sizes.sort((a, b) => {
                        if (a.length < b.length) return 1;
                        if (a.length > b.length) return -1;
                        return 0;
                    }).map((s, i) => (
                        i % 2 ? <div key={i} style={{ color: 'yellow' }}><i>{s}</i></div> :
                            <div key={i} style={{ color: 'red' }}><u>{s} </u></div>
                    )
                    )
                }
            </div>
            <div class="list">
                {
                    sizes.filter(_ => show).map((s, i) => <div key={i}>{s}</div>)
                }
            </div>
        </div >
    );
}

export default Lists;