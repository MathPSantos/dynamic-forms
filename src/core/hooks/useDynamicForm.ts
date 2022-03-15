import { useContext } from "react";
import { DynamicFormContext } from "./../context/DynamicForm.context";

export const useDynamicForm = () => useContext(DynamicFormContext);
