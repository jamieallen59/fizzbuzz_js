function Fizzbuzz() {



Fizzbuzz.prototype.isDivisibleByThree = function(number) {
	if(number % 3 === 0) { return true };
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
	if(number % 5 === 0) { return true };
};

};