class X {
    um():void {
        console.log("Um");
    }
}

class Y extends X{
    dois():void {
        super.um();
        console.log("dois");
    }
}

class Z extends Y {
    tres():void {
        super.dois();
        console.log("três");
    }
}

const z = new Z();
z.tres();