import {
    Product,
    Fees,
    Proft
} from "./index"

let prod = new Product();
prod.setBasePrice(5);

let fees = new Fees();
let proft = new Proft();

prod.register(proft);
prod.register(fees);
