import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type IconType = StaticImport;

export type Step = {
  id: number;
  message: string;
  icon: IconType;
};