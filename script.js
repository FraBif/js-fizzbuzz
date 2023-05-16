let str = "";

for (let i = 0; i <= 100; i++) {
    str = str + i ;
    
  }
   console.log(str)

   
   if (str % 3 == 0) {
    console.log("Fizz")
   } else if (str % 5 == 0) {
    console.log("Buzz")
   } else if (str % 3 == 0 && str % 5 == 0) {
    console.log("FizzBuzz")
   } else {console.log(str)}