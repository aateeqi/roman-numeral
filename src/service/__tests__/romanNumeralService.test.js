import { getRomanNumeral } from "../romanNumeralService";

describe("romanNumeralService test bad input", () => {
  it("should not convert inputs which are not numbers", () => {
    const romanNumeral = getRomanNumeral("abc");
    expect(romanNumeral).toEqual("");
  });

  it("should not convert integers less than or equal 0", () => {
    const romanNumeral = getRomanNumeral(-1);
    expect(romanNumeral).toEqual("");
  });

  it("should not convert integer equal to 0", () => {
    const romanNumeral = getRomanNumeral(0);
    expect(romanNumeral).toEqual("");
  });

  it("should not convert integer greater than 4000", () => {
    const romanNumeral = getRomanNumeral(4000);
    expect(romanNumeral).toEqual("");
  });
});

describe("romanNumeralService test for valid input", () => {
  it("should convert strings which are 1 digit", () => {
    const romanNumeral = getRomanNumeral("4");
    expect(romanNumeral).toEqual("IV");
  });

  it("should convert strings which are 2 digits", () => {
    const romanNumeral = getRomanNumeral("12");
    expect(romanNumeral).toEqual("XII");
  });

  it("should convert numbers which are 3 digits", () => {
    const romanNumeral = getRomanNumeral(693);
    expect(romanNumeral).toEqual("DCXCIII");
  });

  it("should convert numbers which are 4 digits", () => {
    const romanNumeral = getRomanNumeral(2140);
    expect(romanNumeral).toEqual("MMCXL");
  });

  it("should convert strings which are 4 digits", () => {
    const romanNumeral = getRomanNumeral("3742");
    expect(romanNumeral).toEqual("MMMDCCXLII");
  });
});
