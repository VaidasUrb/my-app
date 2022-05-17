function Antras({ number, spalva }) {

    return <h2 style={{ color: spalva }}>{number + 2 > 9 ? null : number + 2}
    </h2>
}

export default Antras;