

function scuberGreetingForFeet(rideFeet){
  if (rideFeet <= 400) {
    return "This one is on me!";
  }
  else if (rideFeet > 400 && rideFeet <=2500){
    return "I will gladly take your thirty bucks."
  }
  else if (rideFeet > 2500) {
    return "No can do."
  }
}
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  const message = (city === "NYC") ? "Ok, sounds good." : "No go.";
  return message
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous": 
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default: return "Bye."
  }
}