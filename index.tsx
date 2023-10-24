import { parse } from "url";

import { Job } from "./components/Job";
import { getMethod } from "./library/getMethod";
import { nameToSvg } from "./library/nameToSvg";
import { queryParse } from "./library/queryParse";
import { reactToSvg } from "./library/reactToSvg";
import { svgToBuffer } from "./library/svgToBuffer";

interface IParameters {
  name?: string;
  style?: string;

  width?: string;

  title?: string;
  location?: string;
  amount?: string;
  currency?: string;
}

const server = async (
  path: string | null,
  res: { status: number; }
): Promise<null | string | Buffer> => {
  const [url, params] = queryParse<IParameters>(path ?? '');
  let [method, append] = getMethod(url);
  let svg: undefined | string = '';
  let outWidth: number | undefined;

  switch (method) {
    case 'avatar': {
      const { name, style } = params;
      if (!name) {
        res.status = 400;
        return 'Need name parameter!';
      }

      svg = await nameToSvg(name, style as any);
      outWidth = 120;
      break;
    }

    case 'svg': {
      const { width } = params;
      svg = await fetch(append).then(e => e.text());
      if (width && !isNaN(+width)) outWidth = +width;
      break;
    }

    default: {
      const {
        title = 'Lorem ipsum',
        location = 'Нарния',
        amount = '',
        currency = ''
      } = params;

      svg = await reactToSvg(
        <Job {...{ title, location }} salary={{ amount: +amount, currency }} />
      );

      break;
    }
  }

  if (!svg) {
    res.status = 404;
    return 'Not found';
  }

  try {
    return svgToBuffer(svg, outWidth);
  } finally {
    Bun.gc(true);
  }
};

Bun.serve({
  async fetch(request) {
    const { url } = request;
    const res = { status: 200 };
    const time = performance.now();
    try {
      const result = await server(parse(url).path, res);
      console.log(`Run ${performance.now() - time}ms ${url}`);
      return new Response(result, {
        ...res, headers: {
          'Content-Type': result instanceof Buffer ? 'image/png' : 'text/plain'
        }
      });
    } catch (e) {
      return new Response(`${e}`, { status: 500 });
    } finally {
    }
  },
  port: 3001
});