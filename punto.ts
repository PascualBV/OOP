class Punto 
{
    private x:number;
    private y:number;

    constructor (x:number, y:number)
    {
        this.x = x;
        this.y = y;
    }

    public toString()
    {
        let xs = this.x.toString();
        let ys = this.y.toString();
        return `·"(${xs},${ys})"`;
    }

    public setX (x:number)
    {
        this.x = x;
    }

    public getX ()
    {
        return this.x;
    }

    public setY (y:number)
    {
        this.y = y;
    }

    public getY ()
    {
        return this.y;
    }

    public distanciaAlOrigen():number
    {  

        let distance:number = Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2));

        return distance;
    }

    public calcularDistancia(otroPunto:Punto):number
    {
        let distance:number = Math.sqrt (Math.pow((this.x - otroPunto.getX()),2) + (Math.pow((this.y - otroPunto.getY()),2)));

        return distance;
    }

    public calcularCuadrante():number
    {
        let cuadrante:number;

        if (this.x == 0 || this.y == 0)
        {
            cuadrante = 0;
        }

        else if (this.x > 0 && this.y > 0)
        {
            cuadrante = 1;
        }

        else if (this.x < 0 && this.y > 0)
        {
            cuadrante = 2;
        }

        else if (this.x < 0 && this.y < 0)
        {
            cuadrante = 3;
        }

        else if (this.x > 0 && this.y < 0)
        {
            cuadrante = 4;
        }

        return cuadrante;
    }
    
    public calcularMasCercano(puntos:Punto[]):Punto
    {
        let total:number = this.calcularDistancia(puntos[0])
        let posicion:number = 0;

        for (let i = 0; i<puntos.length; i++)
        {
            if (total<this.calcularDistancia(puntos[i]))
            {
                total=this.calcularDistancia(puntos[i]);
                posicion = i;
            }
        }

        return  puntos[posicion];
    }
}

let p1:Punto = new Punto (3,2);
let p2:Punto = new Punto (1,7);
let p3:Punto = new Punto (4,2);
let p4:Punto = new Punto (5,4);
console.log (p1.toString())
console.log (p1.distanciaAlOrigen());
console.log (p1.calcularDistancia(new Punto(2,3)));
console.log(p1.calcularCuadrante());
console.log (p1.calcularMasCercano([p3,p4]));