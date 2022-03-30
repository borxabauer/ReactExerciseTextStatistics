
function Letras({text}) {
    const nLetras=text.split("").filter(
        string=> string !=="" && string !==" "
    ).length
       

    return (

        <p>Total de letras: {nLetras}</p>
        
    );
}
export default Letras