import React from "react";
import renderer from "react-test-renderer";
import { RomanNumeral } from "../RomanNumeralPage";

test("renders valid input correctly", () => {
  const romanNumeralMockProps = {
    location: {
      search: "?query=999",
    },
  };
  const tree = renderer
    .create(<RomanNumeral {...romanNumeralMockProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders invalid input correctly", () => {
  const romanNumeralMockProps = {
    location: {
      search: "?query=-190",
    },
  };
  const tree = renderer
    .create(<RomanNumeral {...romanNumeralMockProps} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders when no location exists", () => {
  const tree = renderer.create(<RomanNumeral />).toJSON();
  expect(tree).toMatchSnapshot();
});
