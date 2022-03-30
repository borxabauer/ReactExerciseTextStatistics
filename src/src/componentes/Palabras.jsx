

function Palabras({text}){
    const nPalabras=text.split(" ").filter(
        string=> string !==""
    ).length
       

    return (
        <p>
      Total de Palabras: {nPalabras}
        </p>
    );
}

export default Palabras