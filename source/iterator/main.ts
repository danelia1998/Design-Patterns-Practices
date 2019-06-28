import Iterator from "./index"

let iterate = new Iterator([2, 6, 4]);

while (iterate.hasNext()) {
    console.log(iterate.next());
}

let iterate2 = new Iterator(['a', 'b', 'c']);

while (iterate2.hasNext()) {
    console.log(iterate2.next());
}