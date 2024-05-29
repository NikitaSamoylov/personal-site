import { ReactElement, ReactNode } from "react";

export type TAccordeon = {
  num: number;
  title: string;
  descr: JSX.Element | string[];
  btn: string;
};

export type TAccordionProj = {
  num: number;
  title: string;
  descr: string[];
  deployLink: string;
  gitHubLink: string;
}

