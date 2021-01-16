import { assertEquals } from "./test_deps.ts";
import isArray from "./mod.ts";

Deno.test("returns true for array", () => {
  assertEquals(isArray([]), true);
});

Deno.test("returns false for object", () => {
  assertEquals(isArray({}), false);
});

Deno.test("returns false for null", () => {
  assertEquals(isArray(null), false);
});

Deno.test("returns false for undefined", () => {
  assertEquals(isArray(undefined), false);
});

Deno.test("returns false for booleans", () => {
  assertEquals(isArray(true), false);
  assertEquals(isArray(false), false);
});

Deno.test("returns false for primitives", () => {
  assertEquals(isArray(10), false);
  assertEquals(isArray("bar"), false);
});

Deno.test("returns false for function", () => {
  assertEquals(
    isArray(function () {}),
    false
  );
});
