describe("Fizzbuzz", function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

    describe("knows when a number is", function() {
      it("divisible by 3", function() {
        expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
      });

      it("divisible by 5", function() {
        expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true);
      });

      it("divisble by 15", function() {
        expect(fizzbuzz.isDivisibleByFifteen(15)).toEqual(true);
      });
    });

    describe("knows when a number is NOT", function() {
      it("divisible by 3", function() {
        expect(fizzbuzz.isDivisibleByThree(1)).toEqual(false);
      });

      it("divisible by 5", function() {
        expect(fizzbuzz.isDivisibleByFive(1)).toEqual(false);
      });

      it("divisible by 15", function() {
        expect(fizzbuzz.isDivisibleByFifteen(1)).toEqual(false);
      });
    });

    describe("when playing, the game returns:", function(){
      it("'Fizz' if a number is three", function(){
        expect(fizzbuzz.play(3)).toEqual("Fizz");
      })

      it("'Buzz' if a number is five", function(){
        expect(fizzbuzz.play(5)).toEqual("Buzz");
      })

      it("'FizzBuzz' if a number is fifteen", function(){
        expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
      })

      it("the input number, if a number is 3, 5 or 15", function(){
        expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
      })
      
    });


});
