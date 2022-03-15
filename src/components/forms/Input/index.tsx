import { InputHTMLAttributes } from "react";
import { useDynamicForm } from "../../../core/hooks/useDynamicForm";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export function Input({ label, id, ...props }: InputProps) {
  const { handleChange } = useDynamicForm();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input {...props} onChange={(event) => handleChange(id, event)} />
    </div>
  );
}
