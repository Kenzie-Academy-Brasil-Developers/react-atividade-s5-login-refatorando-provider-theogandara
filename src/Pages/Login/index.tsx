import ButtonSubmit from "../../Components/Button";
import Input from "../../Components/Input";
import { Form, TelaLogin, Errors } from "./style";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Provider/Auth";

const Login = () => {

  const { signIn,authToken} = useAuth();

  const history = useHistory();

  type Inputs = {
    email: string;
    password: string;
  };

  const schema = yup
    .object()
    .shape({
      email: yup
        .string()
        .email("Email inválido")
        .required("*Campo obrigatório"),
      password: yup.string().required("*Campo obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    signIn(data);
  };

  return (
    <TelaLogin>
      <h3>LOGIN</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          register={register}
          name="email"
          placeholder="Insira seu email"
          label="Email"
          type="text"
        />
        {<Errors>{errors.email?.message}</Errors>}
        <Input
          register={register}
          name="password"
          placeholder="Insira sua senha"
          label="Senha"
          type="password"
        />
        {<Errors>{errors.password?.message}</Errors>}
        <ButtonSubmit name="Enviar" type="submit" />
      </Form>
    </TelaLogin>
  );
};

export default Login;
