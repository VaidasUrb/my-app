import rand from "../../Functions/rand";

function Vovere (){

    return (
        <>
            <div>
                <div className="vovere">Vovere Nr.: {2*3}</div>
                <b>Stora Vovere</b>
            </div>
            <h4>Voveriu medis Nr.: {rand(100, 999)}</h4>
        </>
    );
}

export default Vovere;