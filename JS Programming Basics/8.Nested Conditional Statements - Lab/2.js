function solve(input){
    let produkt=input.shift();
    let grad=input.shift();
    let kolichestvo=Number(input.shift());
    let price=0;
    if(grad=='Sofia'){
        if(produkt=='coffee')
        {price=kolichestvo*0.50;
        console.log(price);}
        else if(produkt=="water")
        {price=kolichestvo*0.80;
        console.log(price);}
        else if(produkt=="beer")
        {price=kolichestvo*1.20;
        console.log(price);}
        else if(produkt=="sweets")
        {price=kolichestvo*1.45;
        console.log(price);}
        else if(produkt=="peanuts")
        {price=kolichestvo*1.60;
        console.log(price);}}
    if(grad=='Plovdiv'){
            if(produkt=='coffee')
            {price=kolichestvo*0.40;
            console.log(price);}
            else if(produkt=="water")
            {price=kolichestvo*0.70;
            console.log(price);}
            else if(produkt=="beer")
            {price=kolichestvo*1.15;
            console.log(price);}
            else if(produkt=="sweets")
            {price=kolichestvo*1.30;
            console.log(price);}
            else if(produkt=="peanuts")
            {price=kolichestvo*1.50;
            console.log(price);}}
            if(grad=='Varna'){
                if(produkt=='coffee')
                {price=kolichestvo*0.45;
                console.log(price);}
                else if(produkt=="water")
                {price=kolichestvo*0.70;
                console.log(price);}
                else if(produkt=="beer")
                {price=kolichestvo*1.10;
                console.log(price);}
                else if(produkt=="sweets")
                {price=kolichestvo*1.35;
                console.log(price);}
                else if(produkt=="peanuts")
                {price=kolichestvo*1.55;
                console.log(price);}
    }
}
    solve([])