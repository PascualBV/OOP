import {Mobile} from "./mobile"
import {AgenMob} from "./mobile"

let Nokia3210:Mobile = new Mobile ("Nokia3210","nokia3210","nokia",2,"blue",false,0,120);
let iPhone3G:Mobile = new Mobile ("iPhone3G","iPhone3G","apple",32,"silver",false,1,240);
let SamsungGalaxy10:Mobile = new Mobile("SamsungGalaxy10","galaxy10","samsung",64,"black",true,3,360);

// console.log (Nokia3210,iPhone3G,SamsungGalaxy10);

// Nokia3210.setIs5G(true);
// Nokia3210.setCameraNumber(4);

// console.log (Nokia3210,iPhone3G,SamsungGalaxy10);
// Nokia3210.printMob();

let mobileS:AgenMob = new AgenMob ();
mobileS.setStock([Nokia3210,iPhone3G,SamsungGalaxy10]);
mobileS.printAgenMob();



