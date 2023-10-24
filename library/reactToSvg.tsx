import { ReactNode } from "react";
import satori from "satori";

import { Job } from "../components/Job";
import { fonts } from "../config/fonts";

export async function reactToSvg(node: ReactNode) {
  return await satori(
    node,
    {
      width: 1920,
      height: 1080,
      fonts
    }
  );
}