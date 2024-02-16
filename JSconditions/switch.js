const readlineSync=require("readline-sync");


let day=readlineSync.question("enter day")
switch(day)
{
case "monday":
    console.log("yeah its monday")
    break;

    case "tuesday":
    console.log("its tuesday")
    break;
    default:
        console.log("its invalid day")

}