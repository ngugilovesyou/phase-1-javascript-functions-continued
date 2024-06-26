function saturdayFun(game = "roller-skate"){
  return `This Saturday, I want to ${game}!`
}
saturdayFun();
const mondayWork=function (activity = "go to the office"){
   return `This Monday, I will ${activity}.`
}

mondayWork("work from home");

function wrapAdjective(wrap){
  return function(adjective){
    return `You are ${wrap}${adjective}${wrap}!`
  }
}





// let wrapAdjective = function(adjective){
//   return function(string){
//     return `You are ${adjective} ${string}`
//   }
// }

