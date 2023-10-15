import React from "react";
import HeaderLogin from "../../components/HeaderLogin";
import Footer from "../../components/Footer";

import { ContentLogin } from "./styles";

const Login = () => {
  return (
    <ContentLogin>
      <HeaderLogin />

      <div className="form-login">
        <form>
          <h1>gestilt login</h1>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" />

          <label htmlFor="password">Senha</label>
          <input type="password" name="Senha" />

          <button>Entrar</button>
        </form>
      </div>

      <Footer />
    </ContentLogin>
  );
};

export default Login;
