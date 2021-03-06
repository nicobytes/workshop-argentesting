````
export class Person {

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public weight: number,
    public height: number
  ) {}

  calcIMG() {
  }
}

```
````
describe('test for data', () => {

    it('attributes', () => {
      expect(person.name).toEqual('nicolas');
      expect(person.lastname).toEqual('molina');
      expect(person.age).toEqual(23);
      expect(person.weight).toEqual(40);
      expect(person.height).toEqual(1.65);
    });

  });
````

````
describe('test for calcIMC', () => {

    it('should return a string: down', () => {
      person.weight = 40;
      expect(person.calcIMC()).toEqual('down');
    });

    it('should return a string: normal', () => {
      person.weight = 58;
      expect(person.calcIMC()).toEqual('normal');
    });

    it('should return a string: overweight', () => {
      person.weight = 68;
      expect(person.calcIMC()).toEqual('overweight');
    });

    it('should return a string: overweight level 1', () => {
      person.weight = 75;
      expect(person.calcIMC()).toEqual('overweight level 1');
    });

    it('should return a string: overweight level 2', () => {
      person.weight = 90;
      expect(person.calcIMC()).toEqual('overweight level 2');
    });

    it('should return a string: overweight level 3', () => {
      person.weight = 120;
      expect(person.calcIMC()).toEqual('overweight level 3');
    });

    it('should return a string: no found', () => {
      person.weight = -48;
      expect(person.calcIMC()).toEqual('no found');
      person.weight = -48;
      person.height = -1.70;
      expect(person.calcIMC()).toEqual('no found');
    });


  });
````

````
calcIMC(): string {
  const result = Math.round(this.weight / ((this.height) * (this.height)));
  if (result < 18) {
    return 'down';
  } else if (result >= 18 && result <= 24) {
    return 'normal';
  } else if (result >= 25 && result <= 26) {
    return 'overweight';
  } else if (result >= 27 && result <= 29) {
    return 'overweight level 1';
  } else if (result >= 30 && result <= 39) {
    return 'overweight level 2';
  } else if (result >= 40) {
    return 'overweight level 3';
  }
}
```

````
calcIMC(): string {
  const result = Math.round(this.weight / ((this.height) * (this.height)));
  if (result < 0) {
    return 'no found';
  } else if (result >= 0 && result < 18) {
    return 'down';
  } else if (result >= 18 && result <= 24) {
    return 'normal';
  } else if (result >= 25 && result <= 26) {
    return 'overweight';
  } else if (result >= 27 && result <= 29) {
    return 'overweight level 1';
  } else if (result >= 30 && result <= 39) {
    return 'overweight level 2';
  } else if (result >= 40) {
    return 'overweight level 3';
  }
}
````