import { Button } from "./style";
import { ButtonProps } from "../../Types";

const ButtonSubmit = ({ name, ...rest }: ButtonProps) => {
  return <Button {...rest}>{name}</Button>;
};

export default ButtonSubmit;
