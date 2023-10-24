import { Resvg } from "@resvg/resvg-js";

export function svgToBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}