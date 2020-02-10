function solve(input){
    let cenauiski=Number(input.shift());
    let bira=Number(input.shift());
    let vino=Number(input.shift());
    let rakiq=Number(input.shift());
    let uiski=Number(input.shift());

    let cenarakiq=cenauiski/2;
    let cenavino=cenarakiq*0.60;
    let cenabira=cenarakiq*0.20;
    let sumarakiq=rakiq*cenarakiq;
    let sumavino=vino*cenavino;
    let sumabira=cenabira*bira;
    let sumauiski=uiski*cenauiski;
    let obshtasuma=sumabira+sumarakiq+sumauiski+sumavino;
    console.log(obshtasuma.toFixed(2));
}
    solve([])