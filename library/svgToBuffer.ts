import { Resvg } from "@resvg/resvg-js";

export function svgToBuffer(svg: string, width?: number) {
  return new Resvg(svg, (
    width ?
      {
        fitTo: {
          mode: "width",
          value: width,
        },
      }
      : {
        fitTo: {
          mode: "original",
        },
      }
  )).render().asPng();
}