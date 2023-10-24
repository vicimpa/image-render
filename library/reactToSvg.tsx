import satori from "satori";

import { Job } from "../components/Job";
import { fonts } from "../config/fonts";

export async function reactToSvg(
  title: string,
  location: string,
  amount: number,
  currency: string
) {
  return await satori(
    <Job {...{ title, location }} salary={{ amount, currency }} />,
    {
      width: 1920,
      height: 1080,
      fonts
    }
  );
}