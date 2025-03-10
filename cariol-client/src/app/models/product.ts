export class Product{
    constructor(
        public _id: any,
        public name: string,
        public amount: number,
        public price: number,
<<<<<<< HEAD
        public image: string,
        public description: string,
        public categoryId: string
=======
        public description: string,
        public image: string[],
        public categoryName: string,
        public color: string,
        public size: string
>>>>>>> 7e7feca6fa3c92e6242233d08162b91bde293e42
    ){}
}