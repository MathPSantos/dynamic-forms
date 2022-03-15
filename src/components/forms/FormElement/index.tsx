import type { TField } from '../../../core/types/form.types';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { Select } from '../Select';

interface FormElementProps {
  field: TField; 
}

export function FormElement({ field }: FormElementProps) {
  const Element = {
    input: Input,
    select: Select,
    checkbox: Checkbox
  }[field.element]
  
  return <Element {...field} />;
}