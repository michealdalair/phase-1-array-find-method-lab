// code your solution here


const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},

  ]


function superbowlWin(record){
  const won = record.find(iswin);
  console.log(won)
if (won===undefined){

    return undefined;

  }
  return won["year"]
}







function iswin(object){
  return object.result === "W";
  


}

