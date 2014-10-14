function Fizzbuzz() {


Fizzbuzz.prototype.isDivisibleByThree = function(number) {
	if(number % 3 === 0) { return true } 
		else { return false };
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
	if(number % 5 === 0) { return true }
		else { return false };
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
	if(number % 15 === 0) { return true }
		else { return false };
};

Fizzbuzz.prototype.play = function(number) {
	if(number === 3) { return 'Fizz' }
	else if(number === 5) { return 'Buzz' }
	else if(number === 15) { return 'FizzBuzz' }
	else { return number }
};

};
