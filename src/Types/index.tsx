import { ButtonHTMLAttributes } from "react";
import { FormHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { Path,UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  type: string;
  register: UseFormRegister<SignInData>;
  name: Path<SignInData>;
}

interface SignInData {
  email: string;
  password: string;
}

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  email: string;
  password: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}
