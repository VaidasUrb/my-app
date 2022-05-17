function Vienas({ number, spalva }) { //vietoj props galima irasyti varda

    return <h2 style={{ color: spalva }}> {number + 1 > 9 ? null : number + 1}</h2 >
}

export default Vienas;