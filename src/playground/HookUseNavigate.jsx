import { Link, useNavigate } from "react-router-dom";

function HookUseNavigate() {
  const navigate = useNavigate();

  const function_navigate = () => {
    navigate("/hooks");
  };

  return (
    <div className="container text-center">
      <a href="/hooks">Ir a HomeHooks con etiqueta a</a>
      <br />

      <Link to="/hooks">Ir a home hooks con etiqueta Link</Link>
      <br />

      <button onClick={function_navigate} className="btn btn-success mt-2">Ir a HomeHooks con navigate</button>
    </div>
  );
}

export default HookUseNavigate;
