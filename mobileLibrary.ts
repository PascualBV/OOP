import { Mobile } from "./mobile";

export class MobileLibrary 
{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalPrice:number;

    constructor (name:string, location:string, mobiles:Mobile[])
    {   
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    public setName (name:string)
    {
        this.name = name;
    }

    public getName ()
    {
        return this.name;
    }

    public setLocation (location:string)
    {
        this.location = location;
    }

    public getLocation ()
    {
        return this.location;
    }

    public setMobiles (mobiles:Mobile[])
    {
        this.mobiles = mobiles;
    }

    public getMobiles ()
    {
        return this.mobiles;
    }

    public setTotalPrice (totalPrice:number)
    {
        this.totalPrice = totalPrice;
    }

    public getTotalPrice ()
    {
        return this.totalPrice;
    }

    private totalPriceCalculation()
    {
        let total:number = 0;
        for (let i = 0; i<this.mobiles.length; i++)
        {
            total += this.mobiles[i].getPrice();
        }
        return total;
    }

    public printMobileLibrary ()
    {
        for (let i = 0; i<this.mobiles.length; i++)
        {
            console.log (this.mobiles[i].printMob())
        }
            console.log(`· "Price overall: ${this.totalPrice}"`);
    }

}

// let Nokia3210:Mobile = new Mobile ("Nokia3210","nokia3210","nokia",2,"blue",false,0,120);
// let iPhone3G:Mobile = new Mobile ("iPhone3G","iPhone3G","apple",32,"silver",false,1,240);
// let SamsungGalaxy10:Mobile = new Mobile("SamsungGalaxy10","galaxy10","samsung",64,"black",true,3,360);

// let arr:MobileLibrary = new MobileLibrary ("stock","madrid",[Nokia3210,iPhone3G,SamsungGalaxy10]);
// console.log (arr.totalPriceCalculation());