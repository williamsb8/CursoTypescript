/* export class Person {
  public name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
} */

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private address: string
  ) {}
}

/* export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York');
  }
} */

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}
const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Iroman', 45, 'Tony Stark', tony);

console.log(ironman);
