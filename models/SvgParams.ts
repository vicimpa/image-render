import { object, optional, string, url } from "valibot";

export const SvgParams = object({
  url: string([url()]),
  width: optional(string([]))
});