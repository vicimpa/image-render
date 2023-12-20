import { minLength, object, optional, picklist, string } from "valibot";

export const AvatarStyles = ['beam', 'marble', 'pixel', 'sunset', 'ring', 'bauhaus'] as const;

export const AvatarParams = object({
  name: string([minLength(1)]),
  style: optional(picklist(AvatarStyles))
});