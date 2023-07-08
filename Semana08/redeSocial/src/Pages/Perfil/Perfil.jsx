import { AuthContext } from "../../Components/Context/AuthContext";
import { useContext } from "react";
import FormularioEdicaoPerfil from "../../Components/FormEdicaoPerfil/FormularioEdicaoPerfil";
import './styles.css'
import { UserProvider } from "../../Components/Context/UserContext";

export default function Perfil() {
  const { usuarioLogado } = useContext(AuthContext);
  const prefixo = usuarioLogado.email.split("@").shift();

  return (
    <div className="perfil">
      <h1>Perfil de usuário</h1>
      <h4>User : {prefixo}</h4>
      <br />
      <br />    
      <br />
      <h3>Editar dados do perfil:</h3>
      <UserProvider>
      <FormularioEdicaoPerfil/>
      </UserProvider>
    </div>
  );
}
