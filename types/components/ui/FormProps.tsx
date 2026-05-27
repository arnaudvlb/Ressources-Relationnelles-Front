export type SelectProps = {
  label: string;
  name: string;
  values: string[];
  texts: string[];
  selectDefaultValue: string;
};

export type FormProps = {
  titreForm: string;
  champs: string[];
  names: string[];
  buttonText: string;
  placeHolders?: string[];
  textAreas?: string[];
  selects?: SelectProps[];
  defaultValues?: Record<string, string>;
  onSubmit?: (data: Record<string, string>) => void;
  footerContent?: React.ReactNode;
};