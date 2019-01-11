import { Age } from './../src/age.js';
describe('Age', function () {

  it('should construct an Age class with the user input as a date object', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.dateOfBirth).toEqual(new Date("2000-01-30"));
  });

  it('should return the users age on Mercury', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageOnMercury()).toEqual(79);
  });

  it('should return the users age on Venus', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageOnVenus()).toEqual(28);
  });

  it('should return the users age on Mars', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageOnMars()).toEqual(10);
  });

  it('should return the users age on Jupiter', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageExpectancyJupiter()).toEqual(68);
  });

  it('should return the users remaining age on Mercury', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageExpectancyMercury()).toEqual(-9);
  });

  it('should return the users remaining age on Venus', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageExpectancyVenus()).toEqual(42);
  });

  it('should return the users remaining age on Mars', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageExpectancyMars()).toEqual(60);
  });

  it('should return the users remaining age on Jupiter', function () {
    let testAge = new Age("2000-01-30")
    expect(testAge.ageExpectancyJupiter()).toEqual(68);
  });

});

