"use strict";

import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import prova from "./func.js";

Deno.test("funziona", async () => {
  return prova()
    .then(async (res) => {
      assertEquals(res, "prova");
    });
});

Deno.test("funziona anche così", async () => {
  const res = await prova();
  assertEquals(res, "prova");
});

Deno.test("questo non si rompe più", async () => {
  const res = await prova();
  assertEquals(res, "prova");
});
