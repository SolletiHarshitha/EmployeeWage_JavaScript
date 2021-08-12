//UC 3 - Refactoring the code to Calculating Employee Wage
const IS_ABSENT=0;
const WAGE_PER_HR=20;
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
let empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
if(empCheck==IS_ABSENT){
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}
empHrs=getWorkingHrs(empCheck);
let empWage=empHrs*WAGE_PER_HR;
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

