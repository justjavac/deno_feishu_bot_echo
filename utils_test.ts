import { assert } from "https://deno.land/std/testing/asserts.ts";

import { isMessageReceive, isVerification } from "./utils.ts";

Deno.test("isVerification", (): void => {
  assert(!isVerification(null));
  assert(!isVerification(undefined));
  assert(!isVerification(""));
  assert(!isVerification("foo"));
  assert(!isVerification({}));
  assert(isVerification({ type: "url_verification" }));
});

Deno.test("isMessageReceive", (): void => {
  assert(!isMessageReceive(null));
  assert(!isMessageReceive(undefined));
  assert(!isMessageReceive(1));
  assert(!isMessageReceive("hello"));
  assert(!isMessageReceive({}));
  assert(isMessageReceive({ header: { event_type: "im.message.receive_v1" } }));
});
