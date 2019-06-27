import Person from "./index";

Person.instance = {
    date : '27.06.2019',
    time : '15:00',
    place : "don't know"
};

console.log(Person.instance);