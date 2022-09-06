let FizzBuzz = (a, b) => {
    for (let i = 1; i <= 100; i++) {
      let FizzBuzz = i;
  
      if (i % a === 0)
        FizzBuzz = "Fizz"
      if (i % b === 0)
        FizzBuzz = "Buzz"
      if (i % a && b === "FizzBuzz")
        FizzBuzz = i;
    
      console.log(FizzBuzz);
    }
  }

  FizzBuzz(3,9)