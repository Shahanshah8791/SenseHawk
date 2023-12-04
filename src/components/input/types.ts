export type keyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad'
  | 'url'
  | 'visible-password';

export interface TextInputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  helperText?: string;
  errorText?: string;
  onChangeText?: (text: string) => void;
  value?: string;
  keyboardType?: keyboardType;
  isSecure?: boolean;
  showSecure?: boolean;
  onEyepress?: () => void;
  editable?: boolean;
  returnKeyType?:
    | 'done'
    | 'go'
    | 'next'
    | 'search'
    | 'send'
    | 'previous'
    | 'default';
}
