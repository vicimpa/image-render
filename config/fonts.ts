import { SatoriOptions } from "satori";

import { InterMediumItalic } from "../fonts";
import { InterMedium } from "../fonts";
import { InterSemiBold } from "../fonts";
import { NotoSansJP } from "../fonts";

export const fonts: SatoriOptions['fonts'] = [
  {
    name: 'Inter',
    data: InterMedium,
    style: 'normal',
    weight: 500,
  },
  {
    name: 'Inter',
    data: InterMediumItalic,
    style: 'italic',
    weight: 500,
  },
  {
    name: 'Inter',
    data: InterSemiBold,
    style: 'normal',
    weight: 600,
  },
  {
    name: 'Noto',
    data: NotoSansJP,
    style: 'normal',
    weight: 600,
  },
];