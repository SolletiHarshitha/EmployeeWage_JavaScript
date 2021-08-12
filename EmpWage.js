//UC 4 - Calculating Employee Wage for a month
const WAGE_PER_HR=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const MAX_WORKING_DAYS=20;
let totalEmpHrs=0;
for(let day=0;day<MAX_WORKING_DAYS;day++)
{
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkingHrs(empCheck);
}
let empWage=totalEmpHrs*WAGE_PER_HR;
console.log("Total Hours : "+totalEmpHrs);
console.log("Employee Wage : "+empWage);
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

