//UC 6 - Storing the daily wage in an array
const WAGE_PER_HR=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyWageArray=new Array(); //Initialising array
while(totalEmpHrs<=MAX_WORKING_HRS&&totalWorkingDays<MAX_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHrs(empCheck);
    totalEmpHrs+=empHrs;
    empDailyWageArray.push(calculateDailyWage(empHrs)); //Storing the daily wage in array
}
let empWage=calculateDailyWage(totalEmpHrs);
console.log("Total Working Days : "+totalWorkingDays);
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

