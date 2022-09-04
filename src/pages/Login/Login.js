import { useState, useContext } from "react";
import { AuthContext } from "../../services/Auth";
import styles from "./Login.module.scss";
import { Navigate } from "react-router-dom";


function Login() {
  const {login, authenticated} = useContext(AuthContext);

  const [form, setForm] = useState({
    login:"lucas.rodrigues@recode.org.br",
    senha:"123"
  })

  if (authenticated) return <Navigate to="/secret" />;
  
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Login</h1>

      <form onSubmit={(e) => {
        e.preventDefault()
        login(form)
      }}>
        <input type="text" name="login" value={form.login} onChange={(e) => setForm({...form, login: e.target.value})} />
        <input type="text" name="senha" value={form.senha} onChange={(e) => setForm({...form, senha: e.target.value})} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
