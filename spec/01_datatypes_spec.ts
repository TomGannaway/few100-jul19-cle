describe('data types', () => {
    describe('using variables', () => {
        it('using let', () => {
            let x: any;
            x = 'Blue';
            x = 19;
            expect(x).toBe(19);

            let y = 34;
            expect(y).toBe(34);
        });

        it('using const', () => {
            const PI = 3.1415;
            const favoriteColors = ['blue', 'red '];
            favoriteColors[0] = 'Purple';
            expect(favoriteColors[0]).toBe('Purple');
        });
        it('has a var keyword but don\'t use it', () => {

        });
    });
});
describe('literals in typescript', () => {
    it('has numeric literals', () => {
        let x1 = 12;
        let x2 = 12.3;
        let x3 = 1_000_000;
        let x4 = 0xff; // hex
        let x5 = 0o22; // 0o means octal
        let x6 = 0b1101; // binary (base 2)
    });
    it('has string literals', () => {
        let name = 'Sean';
        expect(name).toBe("Sean");
        let quote = 'As Emerson said, "A foolish consistency is the hobgoblin of small minds".';
        quote = "As Emerson said, \"A foolish consistency is the hobgoblin of small minds\".";
    });
    it('has template strings', () => {
        let story = `Chapter 1.

        It was a dark and stormy night.

        The End`;

        console.log(story);
        let name = 'bob', age = 53;
        let info = `The name is ${name} and the age is ${age}`;
        expect(info).toBe('The name is bob and the age is 53');
        let message = `This is just a "string" by 'Jeff'`;
    });
    it('has the standard stuff', () => {
        let oldEnough = true;
        let tooYoung = false;
        expect("dog").toBeTruthy;
        expect("").toBeFalsy;
        expect(99).toBeTruthy;
        expect(0).toBeFalsy;
        expect(null).toBeFalsy;
        expect([]).toBeTruthy;
    });
    it('josephs question', () => {
        const msg = "Hello";
        expect(msg).not.toBe("Hi");
        const favoriteNumbers = [9, 21, 108];
        expect(favoriteNumbers).toEqual([9, 21, 108]);
    });
    it('has array literals', () => {
        let shoppingList: (string | number)[] = [];

        shoppingList[0] = 'Bread'
        shoppingList[1] = 'Shampoo ';
        shoppingList[2] = 12;
        shoppingList[999] = 'Beer';

        expect(shoppingList[999]).toBe('Beer');

    });
    it('destructuring arrays', () => {
        const shoppingList = ['Bread', 'Shampoo', 'Beer'];
        const [first, , third, fourth] = shoppingList;

        expect(first).toBe('Bread');
        expect(third).toBe('Beer');
        expect(fourth).toBe(undefined);

        const [head, ...rest] = shoppingList; // Jeff said this was the rest operator
        expect(head).toBe('Bread');
        expect(rest).toEqual(['Shampoo', 'Beer']);

    });
    it('also has a spread operator', () => {
        let numbers = [1, 2, 3, 4, 5, 6];
        let numbers2 = [0, ...numbers, 7];
        expect(numbers2).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6]);
    });
    it('has tuples.', () => {
        // let shoppingList: (string | number)[] = ['cat', 13, 'dog'];
        // let shoppingList: Array<string | number> = ['cat', 13, 'dog'];

        type Musician = [string, string, number, string];
        let warren: Musician = ['Warren', 'Ellis', 51, 'Musician'];

        const [, lastName, howOld] = warren;
        expect(lastName.toUpperCase()).toBe('ELLIS');
        expect(howOld).toBe(51);
    });