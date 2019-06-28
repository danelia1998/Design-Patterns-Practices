import {
    ShoppingCart,
    guestStrategy,
    regularStrategy,
    premiumStrategy
} from "./index"

let guest = guestStrategy(10);
let card = new ShoppingCart(guestStrategy);
card.checkout();