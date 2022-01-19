import {InputCustom, Label} from "./style"
import { InputProps } from "../../Types";


const Input = ({ placeholder, name, register, label, type, ...rest }: InputProps) => {
  return (
    <>
      <div>
        <Label>{label}</Label>
        <InputCustom {...register(name)} placeholder={placeholder} type={type}/>
      </div>
    </>
  );
};

export default Input;
