export type AuthFormProps = {
  titreForm: string;
  champs: string[];
  buttonText: string;
  placeholders?: string[];
  onSubmit?: (data: Record<string, string>) => void;
  footerContent?: React.ReactNode;
}