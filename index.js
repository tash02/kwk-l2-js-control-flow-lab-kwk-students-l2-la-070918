// Write your code in this file!
function scuberGreetingForFeet(feet) {
  if (feet<= 400) {
    result = ("This one is on me!")
    return result
  }
   else if (feet>= 2500) {
      result = ("No can do.")
      return result
    }
    else if (feet>2000) {
      result = ("I will gladly take your thirty bucks.")
      return result
    }
  }
  
  function ternaryCheckCity(city) {
    if (city == "NYC") {
      result = ("Ok, sounds good.")
      return result
    }
    else if (city !== "NYC"){
      result = ("No go.")
      return result
    }
  }
  
  function switchOnCharmFromTip(tip) {
    if (tip == "generous") {
      result = ("Thank you so much.")
      return result
    }
    else if (tip == "not as generous" ) {
      result = ("Thank you.")
      return result
    }
    else if (tip !== "generous"){
      result = ("Bye.")
      return result
    }
  }

   