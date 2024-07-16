interface Bird{
    eat(): void;
    swim():void;
}

interface FlyBird{
    fly(): void;
}

interface RunBird{
    run():void;
}

 class Tucan implements Bird, FlyBird {
    public fly (){}
    public eat(){}
    public run(){}
    public swim(){}
 }

 class Huminbird implements Bird{
    public fly (){}
    public eat(){}
    public run(){}
    public swim(){}
 }

class Ostrich implements Bird {
    public eat(){}
    public run(){}
    public swim(){}
}

class Penguin implements Bird {
    public eat(){}
    public run(){}
    public swim(){}
}