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
    });


});
