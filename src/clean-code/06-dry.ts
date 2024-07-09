
type Size = ''|'M'|'S'|'XL'|'L';

class Product{
    constructor (
        public name: string = '',
        public price : number = 0,
        public isStock: boolean = false,
        public size : Size = ''
    ){}

    toString(){
        // No Dry
        if (this.name.length <= 0) throw Error("name is empty");
        if (this.price <= 0) throw Error("price is zero");
        if (this.size === '') throw Error("size is empty");
        return `${this.name}, ${this.price}, ${this.size}`;
    }
}

(()=>{
    const bluePants = new Product('Blue large pants', 10,false,'L');
    console.log(bluePants.toString());
})();