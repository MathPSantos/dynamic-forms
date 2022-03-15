import { FormEvent } from "react";
import { DynamicFormContextProvider } from "../../../core/context/DynamicForm.context";
import { TField } from "../../../core/types/form.types";
import { Form } from "../Form";

interface DynamicFormProps {
  fields: TField[];
  onSubmit(event: FormEvent, fields: TField[]): void;
}

export function DynamicForm({ fields, onSubmit }: DynamicFormProps) {
  return (
    <DynamicFormContextProvider formFields={fields}>
      <Form fields={fields} onSubmit={onSubmit} />
    </DynamicFormContextProvider>
  );
}
