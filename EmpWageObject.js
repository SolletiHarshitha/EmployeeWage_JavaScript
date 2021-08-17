const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const WAGE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HRS=160;
let totalEmpHrs=0;
let totalWorkingDays=0;
let empDailyHrsAndWageArray=new Array();
while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < MAX_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck=Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHrs(empCheck);
    totalEmpHrs+=empHrs;
    //Creating Object
    empDailyHrsAndWageArray.push(
    {
        dayNum : totalWorkingDays,
        dailyHours : empHrs,
        dailyWage : calculateDailyWage(empHrs),
        toString() {
            return '\nDay'+this.dayNum+' => Working Hours is '+this.dailyHours+' And Wage Earned = '+this.dailyWage
        },
    });
}
console.log("Show Daily Hours Worked And Wage Earned : "+empDailyHrsAndWageArray);

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