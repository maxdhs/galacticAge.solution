export class Age {
  constructor(userInput) {
    this.dateOfBirth = new Date (userInput);
    this.age = (new Date() - this.dateOfBirth) / 31536000000;
  }

  ageOnMercury() {
    return Math.round(this.age * 4.14);
  }

  ageOnVenus() {
    return Math.round(this.age * 1.502);
  }

  ageOnMars() {
    return Math.round(this.age * .53);
  }

  ageOnJupiter() {
    return Math.round(this.age * .084);
  }

  ageExpectancyMercury() {
    return Math.round(70 -this.age * 4.14);
  }

  ageExpectancyVenus() {
    return Math.round(70 - this.age * 1.502);
  }

  ageExpectancyMars() {
    return Math.round(70 - this.age * .53);
  }

  ageExpectancyJupiter() {
    return Math.round(70 - this.age * .084);
  }


  
}