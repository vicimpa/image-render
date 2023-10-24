import { reactToSvg } from "./library/reactToSvg";
import { svgToBuffer } from "./library/svgToBuffer";

for (let i = 0; i < 1000; i++) {
  console.time();
  const svg = await reactToSvg('Вакансия 2', 'Россия/Москва', 0, '');
  const buffer = svgToBuffer(svg);
  Bun.gc(true);
  console.timeEnd();
  console.log(buffer.length, i);
}