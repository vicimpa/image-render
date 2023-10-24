const { dir } = import.meta;

export const InterMedium = await Bun
  .file(`${dir}/Inter-Medium.woff`)
  .arrayBuffer();

export const InterMediumItalic = await Bun
  .file(`${dir}/Inter-MediumItalic.woff`)
  .arrayBuffer();

export const InterSemiBold = await Bun
  .file(`${dir}/Inter-SemiBold.woff`)
  .arrayBuffer();

export const NotoSansJP = await Bun
  .file(`${dir}/NotoSansJP-Regular.ttf`)
  .arrayBuffer();