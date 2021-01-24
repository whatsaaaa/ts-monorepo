import { formatTimestamp } from "@whatsaaaa/utils";

describe("formatTimestamp() tests", function () {
   test("01-01-2021", () => {
      expect(formatTimestamp(new Date("01-01-2021"))).toBe(
          "Jan 01, 2021 00:01:00 AM"
      );
   });
});
