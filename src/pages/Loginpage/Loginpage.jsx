import { useState } from "react";
import {Link} from "react-router-dom";

function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow p-4 d-flex flex-column justify-content-between"
        style={{ maxWidth: "400px", width: "100%", height: "550px" }}
      >
        <h3 className="text-center mb-4">Iniciar Sesión</h3>

        {/* Campo Email */}
        <div className="mb-3">
          <label className="form-label fw-bold">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="ejemplo@gmail.com"
          />
        </div>

        {/* Campo Contraseña + botón ver */}
        <div className="mb-3">
          <label className="form-label fw-bold">Contraseña</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Ingresa tu contraseña"
            />
            <button
              className="btn btn-outline-secondary-bg"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁️
            </button>
          </div>
        </div>

        {/* Botón Iniciar Sesión */}
        <button className="btn btn-primary w-100 mb-2">Iniciar Sesión</button>

        {/* Botón Google */}
        <button className="btn btn-outline-Emphasis w-100 mb-3">
          <img
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            width="20"
            className="me-2"
          />
          Iniciar sesión con Google
        </button>

        {/* Enlaces */}
        <div className="text-center">
            <Link to="/forgot">¿Olvidaste tu contraseña?</Link>
            <br />
           <Link to="/register">¿No tienes una cuenta? Regístrate aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
