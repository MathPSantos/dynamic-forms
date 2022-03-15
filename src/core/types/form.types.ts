import { InputHTMLAttributes } from "react";

export type TOption = {
  label: string;
  value: string;
};

export type TFieldElement = "input" | "select" | "checkbox";

export interface TField
  extends InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  id: string;
  element: TFieldElement;
  label?: string;
  options?: TOption[];
}
