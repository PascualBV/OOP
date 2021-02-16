//Reto1

export class Mobile
{
    private name:string;
    private model:string;
    private trademark:string;
    private sdSize:number;
    private color:string;
    private is5G:boolean;
    private cameraNumber:number;
    private price:number;

    constructor (name:string, model:string, trademark:string, sdSize:number, color:string, is5G:boolean, cameraNumber:number, price:number)
    {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    public setName (name:string)
    {
        this.name = name;
    }

    public getName ()
    {
        return this.name;
    }

    public setModel (model:string)
    {
        this.model = model;
    }
    
    public getModel ()
    {
        return this.model;
    }

    
    public setTrademark (trademark:string)
    {
        this.trademark = trademark;
    }

    public getTrademark ()
    {
        return this.trademark;
    }

    public setSdSize (sdSize:number)
    {
        this.sdSize = sdSize;
    }
    
    public getSdSize ()
    {
        return this.sdSize;
    }
    
    public setColor (color:string)
    {
        this.color = color;
    }
    
    public getColor ()
    {
        return this.color;
    }
    
    public setIs5G (is5G:boolean)
    {
        this.is5G = is5G;
    }

    public getIs5G ()
    {
        return this.is5G;
    }

    
    public setCameraNumber (cameraNumber:number)
    {
        this.cameraNumber = cameraNumber;
    }
    
    public getCameraNumber ()
    {
        return this.cameraNumber
    }

    public setPrice (price:number)
    {
        this.price = price;
    }
    
    public getPrice ()
    {
        return this.price;
    }

    public printMob ()
    {
        console.log (`· "The characteristics of the mobile ${this.name} are:"
    · Name: ${this.name}
    · Model: ${this.model}
    · Trademark: ${this.trademark}
    · SD Size (GB): ${this.sdSize}
    · Color: ${this.color}
    · Is 5g?: ${this.is5G}
    · Number of Cameras: ${this.cameraNumber}`)
    }
}

export class AgenMob 
{
    public stock:Mobile[]

    constructor ()
    {
        this.stock = [];
    }

    public setStock (stock:Mobile[])
    {
        this.stock = stock;
    }

    public getStock ()
    {
        return this.stock;
    }

    public printAgenMob ()
    {
        for (let i = 0; i<this.stock.length; i++)
        {
           this.stock[i].printMob();
        }
    }
}