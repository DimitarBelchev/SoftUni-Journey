function solve (input){
    let pariZaHrana=Number(input.shift());
    let pariZaSuveniri=Number(input.shift());
    let pariZaHotel=Number(input.shift());

    let neobhodimBenzin=420/100*7;
    let zaBenzin=neobhodimBenzin*1.85;
    let triDniPrestoi=3*pariZaHrana+3*pariZaSuveniri;
    let PurviDen=pariZaHotel*0.9;
    let vtoriDen=pariZaHotel*0.85;
    let tretiDen=pariZaHotel*0.8;
    let totalsum=zaBenzin+triDniPrestoi+PurviDen+vtoriDen+tretiDen;
    console.log(`Money needed: ${totalsum.toFixed(2)}`);
}
    solve([])