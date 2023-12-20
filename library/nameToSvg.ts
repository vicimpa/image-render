import { AvatarStyles } from "../models/AvatarParams";

const COLORS = ['FF367E', '0267FF', '151515', 'FF367E', '0267FF'];
const COLORS_PARAM = COLORS.join(',');

export type TStyle = (typeof AvatarStyles)[number];

export async function nameToSvg(
  name: string,
  style: TStyle = 'beam'
) {
  if (AvatarStyles.indexOf(style) === -1)
    throw new Error('Unknown style ' + style);

  return await fetch(`https://source.boringavatars.com/${style}/120?name=${name}&colors=${COLORS_PARAM}`)
    .then((res) => res.text());
}