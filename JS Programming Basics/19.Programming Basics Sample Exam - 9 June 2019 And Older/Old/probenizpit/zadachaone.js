function solve (input){
    let broiSektori=Number(input.shift());
    let kapacitetNaStadiona=Number(input.shift());
    let cenaNaBilet=Number(input.shift());

    obshtiPrihodi=kapacitetNaStadiona*cenaNaBilet;
    prihodZaSektor=obshtiPrihodi/broiSektori;
    pariZaBlagotvoritelnost=(obshtiPrihodi-(prihodZaSektor*0.75))/8;
    console.log(`Total income - ${obshtiPrihodi.toFixed(2)} BGN`);
    console.log(`Money for charity - ${pariZaBlagotvoritelnost.toFixed(2)} BGN`);
}
solve([4,5000,5])