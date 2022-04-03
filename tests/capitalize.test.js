import { test } from "@jest/globals";
import capitalize from "../code/capitalize"; 
 
it("String is capitalized", () => {
    expect(capitalize("hello")).toEqual("Hello");
});

it("String of words is capitalized at the start", () => {
    expect(capitalize("hello my name is enoch")).toEqual("Hello My Name Is Enoch")
});