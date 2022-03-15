import { FormEvent } from "react";
import { useDynamicForm } from "../../../core/hooks/useDynamicForm";
import { TField } from "../../../core/types/form.types";
import { FormElement } from "../FormElement";

interface FormProps {
  fields: TField[];
  onSubmit(event: FormEvent, fields: TField[]): void;
}

export function Form({ fields, onSubmit }: FormProps) {
  const { handleFormSubmit } = useDynamicForm();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = handleFormSubmit();

    onSubmit(event, data);
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, i) => (
        <FormElement key={i} field={field} />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
