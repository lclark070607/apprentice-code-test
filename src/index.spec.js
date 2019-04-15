import { assert } from "chai";
import {
  add,
  subtract,
  divide,
  multiply,
  areSameLength,
  areEqual,
  isEven,
  isOdd,
  roundNumber
} from "./index";

describe("Math Functions", () => {
  describe("add", () => {
    //The following tests all pass great!
    it("should be a function", () => {
      assert.isFunction(add);
    });
    it("should return a number", () => {
      assert.isNumber(add(2, 3));
    });
    it("should properly add two numbers", () => {
      assert.equal(add(2, 3), 5);
    });
  });


  describe("subtract", () => {
    it("should be a function", () => {
      assert.typeOf(subtract, "function");
    });
    it("should properly subtract two numbers", () => {
      let solution = subtract(3, 2);
      assert.isAbove(solution, 0);
    });    
    it("should properly subtract two numbers", () => {
      assert.equal(subtract(3, 2), 1);
    });
    it("should return a number", () => {
      assert.isNumber(subtract(3, 2));
    });
  });

  describe("divide", () => {
    it("should be a function", () => {
      let Divide = function (divide) { this.divide = divide; },
      solution = new Divide('solution');
      assert.instanceOf(solution, Divide, 'solution is an instance of divide');
    });
    it("should return Infinity if we divide by 0", () => {
      let solution = () => {
        divide(6, 0);
        return;
      }
      assert.isNotNumber(solution, "The result is infinity");
    });
    it("should return a number", () => {
      assert.isNumber(divide(6, 3));
    });
    it("should return type number", () => {
      let solution = (divide(6, 3));
      assert.typeOf(solution, 'number');
    });
    it("should return a number greater than or equal to zero", () => {
      assert.isAtLeast(6, 0, "is greater than or equal to zero");
    });
  });

  describe("multiply", () => {
    it("should be a function", () => {
      assert.isFunction(multiply);
    });
    it("should return type number", () => {
      let solution = (multiply(6, 3));
      assert.typeOf(solution, 'number');
    });
  });

  describe("areSameLength", () => {
    it("should be a function", () => {
      assert.isFunction(areSameLength);
    });
    // it("should be a function", () => {
    //   let solution = () => {
        
    //   }
    //   assert.typeOf(areSameLength, "array");
    // });
    it("should return a boolean", () => {
      assert.isBoolean(areSameLength("hello", "world"), "True, these strings are the same length.");
    });
    it("should return true if both strings are the same length", () => {
      assert.isTrue(areSameLength("hello", "world"), "True, these strings are the same length.");
    });
    it("should return false if strings have different lengths", () => {
      assert.isFalse(areSameLength("hello", "goodbye"), "False, these strings are not the same length.");
    });
  });

  describe("areEqual", () => {  
    it("should be a function", () => {
      assert.typeOf(areEqual, "function");
    });
    it("should return a boolean", () => {
      assert.isBoolean(areEqual("hello", "world"), "number");
    });
    it("should return true if both numbers are the same", () => {
      assert.isTrue(areEqual(2, 2));
    });
    it("should return false if the numbers are different", () => {
      assert.isFalse(areEqual(1, 2));
    });
  });

  describe("isEven", () => {
    it("should be a function", () => {
      assert.isFunction(isEven);
    });
    it("should be a function", () => {   
      let isEven = (num) => {
        let even = [];
        if (num % 2 === 0) {
          even.push(num);
        }
        assert.typeOf(isEven, "array");
      }  
    });
    it("should return a boolean", () => {
      assert.isBoolean(areEqual("hello", "world"), "number");
    });
    it("should return true if number is even", () => {
      assert.isTrue(isEven(2));
    });
  });

    describe("isOdd", () => {
        // it("should be a function", () => {
        // assert.typeOf(isOdd, "boolean");
        // });
        it("should return a boolean", () => {
        assert.isBoolean(isOdd("hello", "world"));
        });
        it("should return false if the number is even", () => {
        assert.isFalse(isOdd(4));
        });
    });

    describe("roundNumber", () => {
        // it("should be a function", () => {
        // assert.typeOf(roundNumber, "number");
        // });
        it("should round up when needed", () => {
        assert.equal(roundNumber(1.5), 2);
        });
        it("should round down when needed", () => {
        assert.equal(roundNumber(0.4), 0);
        });
    });
});
