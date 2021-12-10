import { IRocket } from "spacex/types";

export interface IModalProps {
  isOpen: boolean;
  loading: boolean;
  rocket: IRocket | undefined;
  onClose?: () => void;
}
