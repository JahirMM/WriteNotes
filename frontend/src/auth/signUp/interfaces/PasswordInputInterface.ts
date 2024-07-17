export interface PasswordInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  required?: boolean;
  error?: boolean;
}
