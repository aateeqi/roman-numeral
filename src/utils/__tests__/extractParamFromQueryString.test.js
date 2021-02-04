import { extractParamFromQueryString } from "../extractParamFromQueryString";

describe("extractParamFromQueryString test for invalid input", () => {
    it("should return empty string when queryParam and queryString is invalid", () => {
      const param = extractParamFromQueryString("abc", "query");
      expect(param).toEqual("");
    });

    it("should return empty string when no params are passed", () => {
        const param = extractParamFromQueryString();
        expect(param).toEqual("");
      });

      it("should return empty string when queryParam does not exist inside of queryString", () => {
        const param = extractParamFromQueryString("?query=123", "q");
        expect(param).toEqual("");
      });
});

describe("extractParamFromQueryString for valid input", () => {
    it("should return empty string when queryParam and queryString is invalid", () => {
      const param = extractParamFromQueryString("?query=123", "query");
      expect(param).toEqual("123");
    });

    it("should return world when queryParam is hello and queryString is ?hello=world", () => {
        const param = extractParamFromQueryString("?hello=world", "hello");
        expect(param).toEqual("world");
      });
});
