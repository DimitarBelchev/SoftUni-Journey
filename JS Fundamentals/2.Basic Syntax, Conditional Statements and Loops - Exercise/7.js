function solve(n){
    for(let i=1; i<=n; i++){
        let output='';
        for(let y=1;y<=i;y++){
            output+=i+' ';
        }
        console.log(output);
    }
}
    solve([])