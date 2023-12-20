import express, { NextFunction, Request, Response } from "express";
import { parse, ValiError } from "valibot";

import { Job } from "./components/Job";
import { nameToSvg } from "./library/nameToSvg";
import { reactToSvg } from "./library/reactToSvg";
import { SVG } from "./library/SVG";
import { svgToBuffer } from "./library/svgToBuffer";
import { AvatarParams } from "./models/AvatarParams";
import { BaseParams } from "./models/BaseParams";
import { SvgParams } from "./models/SvgParams";

const app = express();

app.disabled('x-powered-by');

app.use((req, res, next) => {
  res.once('close', () => {
    Bun.gc(true);
  });

  next();
});

app.get('/', (req, res, next) => {
  const {
    title,
    location,
    amount,
    currency
  } = parse(BaseParams, req.query);

  const render = (
    <Job {...{ title, location }} salary={{ amount, currency }} />
  );

  reactToSvg(render)
    .then(svg => next(new SVG(svg)))
    .catch(next);
});

app.get('/avatar', (req, res, next) => {
  const { name, style } = parse(AvatarParams, req.query);

  nameToSvg(name, style)
    .then(svg => next(new SVG(svg)))
    .catch(next);
});

app.get('/svg', (req, res, next) => {
  const { url, width } = parse(SvgParams, req.query);
  let outWidth: number | undefined = undefined;
  if (width && !isNaN(+width)) outWidth = +width;

  fetch(url)
    .then(r => r.text())
    .then(svg => next(new SVG(svg, outWidth)))
    .catch(next);
});

app.use(
  (err: any, req: Request, res: Response, next: NextFunction) => {
    if (!(err instanceof SVG)) {
      return next(err);
    }

    next(svgToBuffer(err.svg, err.outWidth));
  }
);

app.use(
  (err: any, req: Request, res: Response, next: NextFunction) => {
    if (!(err instanceof Buffer)) {
      return next(err);
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    res.send(err);
  }
);

app.use(
  (err: any, req: Request, res: Response, next: NextFunction) => {
    if (!(err instanceof ValiError)) {
      return next(err);
    }

    res.statusCode = 400;

    res.send({
      code: res.statusCode,
      message: err.message,
      reson: err.issues
    });
  }
);

app.use(
  (err: any, req: Request, res: Response, next: NextFunction) => {
    res.statusCode = 'code' in err ? err.code : 500;

    res.send({
      code: res.statusCode,
      message: 'message' in err ? err.message : `${err}`
    });
  }
);

app.listen(3001);