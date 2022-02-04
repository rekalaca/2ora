function Kiir(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td>Név:</td>
                    <td>Kor:</td>
                    <td>Nem:</td>
                    <td>Születési év:</td>
                </tr>
                {props.tomb.map((adat) => {
                    let szinez = "lány";
                    if (adat.nem == "fiú") {
                        szinez = "fiú";
                    }
                    return (<tr className={szinez}><td>{adat.nev}</td><td>{adat.kor}</td><td>{adat.nem}</td><td>{2022 - adat.kor}</td></tr>)
                })}

            </tbody>

        </table>
    )
}


export default Kiir;