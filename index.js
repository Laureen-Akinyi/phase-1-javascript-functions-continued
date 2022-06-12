// code your solution here
function saturdayFun(plan = "roller-skate"){
   return `This Saturday, I want to ${plan}!`
}
saturdayFun();

function mondayWork(event = "go to the office"){
   return `This Monday, I will ${event}.`
}
 
mondayWork("This Monday, I will work from work.")

function wrapAdjective(adjective){
   const specialChar = function(start){
      return `You are ${adjective}${start}${adjective}!`
   } 
   return specialChar
}
wrapAdjective("*")