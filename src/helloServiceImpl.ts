export class HelloServiceImpl {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  showGreeting() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  }
}
