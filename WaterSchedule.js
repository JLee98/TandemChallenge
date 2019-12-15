var scheduleJson = require("./Apprentice_WeGrowInTandem_Data.json");
var jsonLength = Object.keys(scheduleJson).length;
var scheduleLength = 12 * 7;
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
var lookup = new Map();
var dateSchedule = new Map();

// Schedule for One Plant
if(process.argv[2] != null) {
  var plantArray = process.argv.slice(2);
  var plantJoin  = [];
  for(var p in plantArray) {
    plantJoin.push(plantArray[p]);
  }
  var plant = plantJoin.join(" ");
  var occurance = null;
  occurance = findPlantOccurance(plant);

  if(occurance != null) {
    var tempSchedule = createSchedule(plant, occurance);
    dateSchedule.set(plant, tempSchedule);
    printSchedule();
  }
  else {
    console.log("Could not find plant " + plant);
  }
}

// Schedule for All Plants
else {
  for(var i = 0; i < jsonLength; i++) {
    var numDays = parseInt(scheduleJson[i].water_after.split(" ")[0]);
    if(lookup.has(numDays)) {
      var tempSchedule = lookup.get(numDays);
      dateSchedule.set(scheduleJson[i].name, tempSchedule);
    }
    else {
      var tempSchedule = createSchedule(scheduleJson[i].name, numDays);
      dateSchedule.set(scheduleJson[i].name, tempSchedule);
    }
  }
  printSchedule();
}

function findPlantOccurance(plant) {
  for(var i = 0; i < jsonLength; i++) {
    if(plant === scheduleJson[i].name) {
      return parseInt(scheduleJson[i].water_after.split(" ")[0]);
    }
  }
  return null;
}

function createSchedule(name, occur) {
  var dayCount = 0;
  var curDate = new Date("2019-12-17");
  var dateArray = [];
  while(dayCount <= scheduleLength) {
    dateArray.push(curDate.toLocaleDateString("en-US", options));
    curDate.setDate(curDate.getDate() + occur);
    dayCount+= occur;
    if(days[curDate.getDay()] === "Saturday") {
      curDate.setDate(curDate.getDate()-1);
      dayCount-=1;
    }
    else if(days[curDate.getDay()] === "Sunday") {
      curDate.setDate(curDate.getDate() + 1);
      dayCount+=1;
    }
  }
  lookup.set(occur, dateArray);
  return dateArray;
}

function printSchedule() {
  for(let [k ,v] of dateSchedule) {
    console.log("\n**************Watering Schedule for " + k + "**************");
    for(var i = 0; i < v.length; i++) {
      console.log("\t\t" + v[i]);
    }
  }
}

module.exports = {createSchedule, findPlantOccurance};
