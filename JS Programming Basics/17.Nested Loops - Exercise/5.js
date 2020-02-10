function solve(input){
    let firstNum=Number(input.shift());
    let secondNum=Number(input.shift());
    let line="";
   
    for (let i=firstNum; i<=secondNum; i++){
        let strNum=i+"";
 
        let leftSum=Number(strNum.charAt(0))+ Number(strNum.charAt(1));
        let rightSum=Number(strNum.charAt(3))+ Number(strNum.charAt(4));
   
        if (leftSum<rightSum){
            leftSum+=Number(strNum.charAt(2));
        } else if (rightSum<leftSum){
            rightSum+=Number(strNum.charAt(2));
        }
         if (leftSum==rightSum){
            line+=i+ " ";
        }
       
    }console.log(line);
}
    solve([])