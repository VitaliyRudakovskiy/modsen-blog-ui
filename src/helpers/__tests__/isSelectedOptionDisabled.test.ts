import { describe, expect, test } from "vitest";

import { isSelectedOptionDisabled } from "../isSelectedOptionDisabled";

describe("isSelectedOptionDisabled", () => {
  test("should return false if array is empty", () => {
    const res = isSelectedOptionDisabled([], "test");

    expect(res).toBeFalsy();
  });

  test("should return false if value is not disabled", () => {
    const res = isSelectedOptionDisabled(
      [
        {
          isDisabled: false,
          value: "test",
        },
      ],
      "test",
    );

    expect(res).toBeFalsy();
  });

  test("should return true if value is disabled", () => {
    const res = isSelectedOptionDisabled(
      [
        {
          isDisabled: true,
          value: "test",
        },
      ],
      "test",
    );

    expect(res).toBeTruthy();
  });
});
