import { Mobile } from "./mobile";
import { MobileLibrary } from "./mobileLibrary";

let Nokia3210:Mobile = new Mobile ("Nokia3210","nokia3210","nokia",2,"blue",false,0,120);
let iPhone3G:Mobile = new Mobile ("iPhone3G","iPhone3G","apple",32,"silver",false,1,240);
let SamsungGalaxy10:Mobile = new Mobile("SamsungGalaxy10","galaxy10","samsung",64,"black",true,3,360);
let Motorola28:Mobile = new Mobile ("motorola","28","motorola28",32,"red",true,3,320);

let arr:MobileLibrary = new MobileLibrary ("stock","madrid",[Nokia3210,iPhone3G,SamsungGalaxy10,Motorola28]);
console.log (arr.getTotalPrice());
console.log (arr.getName());
console.log (arr.getMobiles());
arr.printMobileLibrary();
console.log (arr.getLocation());