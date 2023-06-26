//Initialise array
const concoctions = [
'Bubbling concoction',
'Dreadful concoction',
'Gleaming concoction',
'Hazy concoction',
'Slimy concoction'];

const concL = concoctions.length;
console.log('Number of available concoctions: ' + concL);


//generate random concoction function
function generateConc(){
	//nested function
	function rNumber(){
		let rNum = Math.floor(Math.random() * concL);
		return rNum;
	}
	let rNum = rNumber();
	let outputV = concoctions[rNum];
	return outputV;
}

function generateConcBtn(){
	const outputV = generateConc();
	console.log(outputV + ' - added to your hand');
	alert(outputV + ' - added to your hand');
}

//discover 3 different random concoctions function
function discoverConcBtn(){
	let tempConcoctions = []; //for storing the discoveries temporarily
	while(tempConcoctions.length < 3){
		const rConcoction = generateConc();
		if(tempConcoctions.indexOf(rConcoction) === -1){
			tempConcoctions.push(rConcoction);
		}
	}
	console.log('1: ' + tempConcoctions[0] + ' - ' + '2: ' + tempConcoctions[1] + ' - '  + '3: ' + tempConcoctions[2]);
	const input = prompt(`1: ${tempConcoctions[0]} \n2: ${tempConcoctions[1]} \n3: ${tempConcoctions[2]} \nChoose one of the concoctions by entering the associated number:`); //promts user to pick a concoction, and saves value in input
	let inputConversion = Number(input); //converts input value from string to number
	let outputV = tempConcoctions[inputConversion - 1]; //uses input value to pick a node from array
	
	alert(`${outputV} - addad to your hand`);
}





// ToDo
// consider error handling of user input




/*
1. // add array of concoctions
2. // add button event listener
3. // test event listener in console
4. // generate random number based on array length
5. // refactor number generation as function
6. // use number to pick array node
7. // output string of picked array node to console
8. // make an empty array
9. // set up a for-loop
10. // loop through the concoctions to find 1 based on a random number
11. // assign numbers 1-3 to each 
12. // output tempConc array to console
13. // fix the test method
14. // compare test function to original
15. // make sure the array is full
16. // output all 3 to console
17. // assign numbers to discoveries
18. // promt for user input via assigned numbers
19. // output name of picked concoction to the console
20. // improve the first generate concoction function
*/