function solve() {
	//TODO...
	let input = document.getElementById("input").value;

	//console.log(input.length)
	let sum = calculateSum(input);
	input = splitInput(input, sum);
	let result = splitGroups(input);

	showResult(result)

	function showResult(result) {
		document.getElementById('resultOutput').innerHTML = result;
	}
//	console.log(input.length)
	function splitGroups(input) {
		let matched = input.match(/.{1,8}/g);

		let result = "";
		let temp = "";
		matched.forEach(e => {
			temp = String.fromCharCode(binaryToString(e));
			//debugger
			let test = /[A-Za-z ]+/g;
			if (temp.match(test)) {
			result += String.fromCharCode(binaryToString(e));				
			}
			console.log(temp)
		});
		console.log(temp)
		return result;
		
	}
	function binaryToString(element) {
		return parseInt(+element, 2);
	}
	function splitInput(input, sum) {
		let result = input.substring(sum);
		result = result.substring(0, result.length - sum);
		return result;
		
	}
	function calculateSum(input) {

		while (input.toString().length> 1) {
			input = spreadSum(input);
		}
	return input;

	}

	function spreadSum(num) {
		return Array.from(num.toString()).map(Number).reduce((a, b) => a+b);
		
	}
}