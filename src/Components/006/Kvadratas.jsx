import Apskritimas from "./Apskritimas";
import KvadratoKvadratas from "./KvadratoKvadratas";

function Kvadratas({ spalva1, spalva2, show }) {

    switch (show) {
        case 'apskritimas':
            return (
                <div className="kvadratas" style={{ backgroundColor: spalva1 }}>
                    <Apskritimas spalva2={spalva2}></Apskritimas>
                </div>
            )
        case 'kvadratas':
            return (
                <div className="kvadratas" style={{ backgroundColor: spalva1 }}>
                    <KvadratoKvadratas spalva2={spalva2}></KvadratoKvadratas>
                </div>
            )
        default: return (
            <div className="kvadratas" style={{ backgroundColor: spalva1 }}></div>
        )

    }



}

export default Kvadratas;