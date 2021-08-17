// Storing the daily wage in an array
const WAGE_PER_HR=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArray=new Array(); //Initialising array
let empDailyWageMap=new Map(); //Initialising Map
let empDailyHrsMap=new Map();

while(totalEmpHrs<=MAX_WORKING_HRS&&totalWorkingDays<MAX_WORKING_DAYS)
{
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHrs(empCheck);
    totalEmpHrs+=empHrs;
    let dailyWage=empDailyWageArray.push(calculateDailyWage(empHrs)); //Storing the daily wage in array
    empDailyWageMap.set(totalWorkingDays,calculateDailyWage(empHrs)); //Storing the day and the daily wage in map
    empDailyHrsMap.set(totalWorkingDays,empHrs);
}
let empWage=calculateDailyWage(totalEmpHrs);
console.log("UC6 - Total Working Days : "+totalWorkingDays);
console.log("Total Hours : "+totalEmpHrs);
console.log("Employee Wage : "+empWage);

//Checking the employee hours 
function getWorkingHrs(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        empHrs=4;
        return empHrs;
    case IS_FULL_TIME:
        empHrs=8;
        return empHrs;
    default:
        return 0;
}
}

//Calculating the wage
function calculateDailyWage(empHrs){
    return empHrs*WAGE_PER_HR;
}

//Calculate total wage using foreach traversal or reduce method
let totalEmpWage=0;
function sum(dailyWage){
    totalEmpWage+=dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("\nUC7A Using foreach traversal\nTotal Working Days : "+totalWorkingDays+"\nTotal hours : "+totalEmpHrs+"\nEmployee Wage : "+totalEmpWage);

function totalWages(totalEmpWage,dailyWage){
    return totalEmpWage+dailyWage;
}
console.log("\nUC7A Using reduce method\nEmployee Wage : "+empDailyWageArray.reduce(totalWages,0));

//Show the day along with the daily wage
let dayCount=0;
function mapDayWithDailyWage(dailyWage){
    dayCount++;
    return "Day "+dayCount+" = "+dailyWage;
}
let mapDayWithArray=empDailyWageArray.map(mapDayWithDailyWage);
console.log("\nUC7B - Daily Wage Map");
console.log(mapDayWithArray);

//Show days when full time wage earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullTimeWageArray=mapDayWithArray.filter(fullTimeWage);
console.log("\nUC7C - Daily Wage Filter When Full Time Wage Earned");
console.log(fullTimeWageArray);

//Find the first occurence when full time wage was earned
console.log("\nUC7D - First occurence of full time wage earned");
console.log(mapDayWithArray.find(fullTimeWage));

//Check if every element of full time wage is truly holding full time wage
console.log("\nUC7E - Check all elements having full time wage");
console.log(fullTimeWageArray.every(fullTimeWage));

//Check if any part time wage
function partTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("\nUC7F - Check if any part time wage");
console.log(mapDayWithArray.some(partTimeWage));

//Find the number of days employee worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0)
    return numOfDays+1;
    return numOfDays;
}
console.log("\nUC7G - Number of Days Worked : "+empDailyWageArray.reduce(totalDaysWorked,0));

//Storing the day along with daily wage in map
console.log("\nEmployee Wage Map :");
console.log(empDailyWageMap);
console.log("Employee Wage : "+ Array.from(empDailyWageMap.values()).reduce(totalWages,0));

//Arrow Functions
const findTotalWage = (totalWage,dailyWage) => {
    return totalWage+dailyWage;
}
let totalHours=Array.from(empDailyHrsMap.values()).reduce(findTotalWage,0);
let totalWage=empDailyWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotalWage,0);
console.log("Employee Wage Using Arrow Function : \nTotal Hours : "+totalHours+"\nTotal Wage : "+totalWage);