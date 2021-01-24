import { isMessage, isTypedArray } from "../src";

describe("isMessage() tests", function () {
   test("valid message", () => {
       expect(
           isMessage({
               id: 11,
               teamId: "123abc",
               channelId: "123abc",
               userId: "123abc",
               body: "hello, world"
           })
       ).toEqual(true);
   });

   test("invalid message", () => {
      expect(
          isMessage({
              description: "hello, world",
              name: "john"
          })
      ).toEqual(false);
   });
});

describe("isTypedArray() tests", function () {
    test("non-array", () => {
        expect(
            // @ts-expect-error
            isTypedArray(null, () => true)
        ).toEqual(false);
    });
    test("empty array", () => {
        expect(isTypedArray([], (x: any): x is any => true)).toEqual(true);
    });
    test("homogenous array [1, 2, 3]", () => {
        expect(
            isTypedArray([1, 2, 3], (x): x is number => typeof x === "number")
        ).toEqual(true);
    });
    test("mixed array [1, 'a', 3]", () => {
        expect(
            isTypedArray(
                [1, "a", 3],
                (x): x is number => ["number"].indexOf(typeof x) >= 0
            )
        ).toEqual(false);
    });
});