import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { useDynamicForm } from "../../../core/hooks/useDynamicForm";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  options?: OptionHTMLAttributes<HTMLOptionElement>[];
}

export function Select({ label, id, options, ...props }: SelectProps) {
  const { handleChange } = useDynamicForm();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select {...props} onChange={(event) => handleChange(id, event)}>
        {options?.map((e, i) => (
          <option key={i} value={e.value}>
            {e.label}
          </option>
        ))}
      </select>
    </div>
  );
}
