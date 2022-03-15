import {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { TField } from "../types/form.types";

interface DynamicFormContextData {
  handleChange(
    fieldId: string,
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void;
  handleFormSubmit(): TField[];
}

interface DynamicFormContextProviderProps {
  children: ReactNode;
  formFields: TField[];
}

export const DynamicFormContext = createContext({} as DynamicFormContextData);

export function DynamicFormContextProvider({
  children,
  formFields,
}: DynamicFormContextProviderProps) {
  const [fields, setFields] = useState<TField[]>([]);

  useEffect(() => {
    setFields(formFields);
  }, []);

  function handleFormSubmit() {
    return fields;
  }

  function handleChange(fieldId: string, event: ChangeEvent<HTMLInputElement>) {
    const updatedFields = [...fields];

    updatedFields.forEach((field) => {
      if (field.id === fieldId) {
        const { element } = field;

        switch (element) {
          case "checkbox":
            field.checked = event.target.checked;
            return;

          default:
            field.value = event.target.value;
            return;
        }
      }
    });

    setFields(updatedFields);

    console.log(updatedFields);
  }

  return (
    <DynamicFormContext.Provider
      value={{
        handleFormSubmit,
        handleChange,
      }}
    >
      {children}
    </DynamicFormContext.Provider>
  );
}
