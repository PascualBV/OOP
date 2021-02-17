import { Punto } from "./punto";


class Triangulo
{
    private a:Punto;
    private b:Punto;
    private c:Punto;

    constructor (a:Punto, b:Punto, c:Punto)
    {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public setA (a:Punto)
    {
        this.a = a;
    }

    public getA ()
    {
        return this.a
    }

    public setB (b:Punto)
    {
        this.b = b;
    }

    public getB ()
    {
        return this.b
    }

    public setC (c:Punto)
    {
        this.c = c;
    }

    public getC ()
    {
        return this.c
    }

    public calcularLongitudLados():number[]
    {
        let distancias:number[] = [];

        let d1:number = this.a.calcularDistancia(this.b);
        let d2:number = this.b.calcularDistancia(this.c);
        let d3:number = this.c.calcularDistancia(this.a);
        
        distancias.push(d1,d2,d3);
        
        return distancias;
    }
}
let p7:Punto = new Punto (0,0);
let p8:Punto = new Punto (0,3);
let p9:Punto = new Punto (4,0);

let tri:Triangulo = new Triangulo (p7,p8,p9);

console.log (tri.calcularLongitudLados());