import type { ImMessageReceiveV1Event, Verification } from "./types.ts";

export function isVerification(body: any): body is Verification {
  if (body == null) return false;
  if (typeof body !== "object") return false;
  return body?.type === "url_verification";
}

export function isMessageReceive(body: any): body is ImMessageReceiveV1Event {
  if (body == null) return false;
  if (typeof body !== "object") return false;
  return body?.header?.event_type === "im.message.receive_v1";
}
