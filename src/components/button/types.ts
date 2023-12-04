export interface ButtonProps {
  title: string;
  onPress?: () => void;
  textColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
}
