// import {IShoppingCart} from "./interfaces"

// class ShoppingCart {
//     constructor(public products = []) {}

//     addProduct(p: object) {
//         this.products.push(p);
//     };
// }

// class Discount {

//     calc(products: []) {
//         let ndiscount = new NumberDiscount();
//         let pdiscount = new PriceDiscount();
//         let none = new NoneDiscount();
//         ndiscount.setNext(pdiscount);
//         pdiscount.setNext(none);
//         return ndiscount.exec(products);
//     };
// }

// class NumberDiscount {
//     next: PriceDiscount | null;

//     constructor() {
//         this.next = null;
//     }

//     setNext(fn: PriceDiscount) {
//         this.next = fn;
//     };

//     exec(products: { length: number; }) {
//         let result = 0;
//         if (products.length > 3)
//             result = 0.05;
//         if(this.next !== null) {
//             return result + this.next.exec(products);
//         }
//     };
// }

// class PriceDiscount {
//     next: null;

//     constructor() {
//         this.next = null;
//     }

//     setNext(fn: NoneDiscount) {
//         this.next = fn;
//     };

//     exec(products) {
//         let result = 0;
//         let total = products.reduce((a: string | number, b: string | number) => a + b);

//         if (total >= 500)
//             result = 0.1;

//         return result + this.next.exec(products);
//     };
// }

// class NoneDiscount {
//     exec() {
//         return 0;
//     };
// }

// export {
//     ShoppingCart,
//     Discount
// };