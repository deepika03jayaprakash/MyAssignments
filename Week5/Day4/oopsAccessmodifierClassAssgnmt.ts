class Arithmetic{

    //properties
    public a:number=5
    public b:number=10
    public c:number=15
    protected d:number=20

    //method
    public add()
    {
        console.log("Addition of a and b:", this.a+this.b)
    }

    private sub()
    {
        console.log("Subtraction of d and c:", this.d-this.c)
    }

    public subtract()
    {
        
        return this.sub()
    }
}

const math = new Arithmetic()
math.add()
math.subtract()
