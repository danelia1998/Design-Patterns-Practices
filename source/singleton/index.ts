class Person {
    public static instance: object;

    constructor() {
        if (Person.instance) {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

export default Person;
