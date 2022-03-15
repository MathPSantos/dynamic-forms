import { FormEvent } from "react";
import { DynamicForm } from "./components/forms/DynamicForm";
import { TField } from "./core/types/form.types";

const fields: TField[] = [
  {
    id: "name",
    name: "name",
    placeholder: "Digite seu nome",
    type: "text",
    element: "input",
    label: "Seu nome",
  },
  {
    id: "select",
    name: "select",
    placeholder: "Selecione seu sexo",
    element: "select",
    label: "Seu sexo",
    options: [
      {
        label: "Masculino",
        value: "male",
      },
      {
        label: "Feminino",
        value: "female",
      },
    ],
  },
  {
    id: "checkbox",
    name: "checkbox",
    element: "checkbox",
    label: "Amador",
    value: "value",
  },
];

function App() {
  function handleSubmit(_: FormEvent, fields: TField[]) {
    console.log(fields);
  }

  return <DynamicForm fields={fields} onSubmit={handleSubmit} />;
}

export default App;
