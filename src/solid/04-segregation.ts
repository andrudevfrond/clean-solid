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
    public fly (){return 100;}
    public eat(){}
    public swim(){}
 }

 class Huminbird implements Bird{
    public fly (){return 300;}
    public eat(){}
    public swim(){}
 }

class Ostrich implements Bird, RunBird {
    public run(){}
    public eat(){}
    public swim(){}
}

class Penguin implements Bird {
    public eat(){}
    public swim(){}
}