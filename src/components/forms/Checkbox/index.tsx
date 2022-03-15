import { InputHTMLAttributes } from "react";
import { useDynamicForm } from "../../../core/hooks/useDynamicForm";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
}

export function Checkbox({ label, id, value, ...props }: CheckboxProps) {
  const { handleChange } = useDynamicForm();

  return (
    <label htmlFor={id}>
      <input
        {...props}
        type="checkbox"
        onChange={(event) => handleChange(id, event)}
      />
      {label}
    </label>
  );
}
