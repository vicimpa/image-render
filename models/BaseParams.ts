import { maxLength, object, optional, string } from "valibot";

export const BaseParams = object({
  title: optional(string([maxLength(256)])),
  location: optional(string()),
  amount: optional(string([])),
  currency: optional(string([]))
});
