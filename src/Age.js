export class Age {
  constructor(userInput) {
    this.dateOfBirth = new Date (userInput);
    this.age = (new Date() - this.dateOfBirth) / 31536000000;
  }

  ageOnMercury() {
    return this.age * 4.14
  }
  
}