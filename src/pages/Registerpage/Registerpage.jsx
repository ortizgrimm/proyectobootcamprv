import { useState } from "react";
import {Link} from "react-router-dom";

function Loginpage() {
  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");

  const handleRegister = () => {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass1 = document.getElementById("passwordRegister").value.trim();
    const pass2 = document.getElementById("passwordConfirm").value.trim();

    setAlertMsg(""); // limpiar mensajes

    if (!nombre || !email || !pass1 || !pass2) {
      setAlertMsg(
        `<div class="alert alert-danger" role="alert">
          ⚠️ Todos los campos son obligatorios.
        </div>`
      );
      return;
    }

    if (pass1 !== pass2) {
      setAlertMsg(
        `<div class="alert alert-danger" role="alert">
          ❌ Las contraseñas no coinciden.
        </div>`
      );
      return;
    }

    setAlertMsg(
      `<div class="alert alert-success" role="alert">
        ✔ Registro exitoso.
      </div>`
    );
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow p-4 d-flex flex-column justify-content-between"
        style={{ maxWidth: "400px", width: "100%", height: "750px" }}
      >
        <h3 className="text-center mb-4 fw-bold">Crear Cuenta</h3>

        {/* ALERTA */}
        <div
          id="alertBox"
          dangerouslySetInnerHTML={{ __html: alertMsg }}
        ></div>

        {/* Campo Nombre */}
        <div className="mb-3">
          <label className="form-label fw-bold">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Tu nombre"
          />
        </div>

        {/* Campo Email */}
        <div className="mb-3">
          <label className="form-label fw-bold">Correo electrónico</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="ejemplo@gmail.com"
          />
        </div>

        {/* Contraseña */}
        <div className="mb-3">
          <label className="form-label fw-bold">Contraseña</label>
          <div className="input-group">
            <input
              type={showPass1 ? "text" : "password"}
              id="passwordRegister"
              className="form-control"
              placeholder="Ingresa una contraseña"
            />
            <button
              className="btn btn-outline-secondary-bg"
              type="button"
              onClick={() => setShowPass1(!showPass1)}
            >
              👁️
            </button>
          </div>
        </div>

        {/* Confirmar Contraseña */}
        <div className="mb-4">
          <label className="form-label fw-bold">Confirmar contraseña</label>
          <div className="input-group">
            <input
              type={showPass2 ? "text" : "password"}
              id="passwordConfirm"
              className="form-control"
              placeholder="Repite la contraseña"
            />
            <button
              className="btn btn-outline-secondary-bg"
              type="button"
              onClick={() => setShowPass2(!showPass2)}
            >
              👁️
            </button>
          </div>
        </div>

        {/* Botón Registrar */}
        <button
          className="btn btn-primary w-100 mb-2"
          onClick={handleRegister}
        >
          Registrarse
        </button>

        {/* Botón Google */}
        <button className="btn btn-outline-Emphasis w-100 mb-3">
          <img
            src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
            width="20"
            className="me-2"
          />
          Registrarse con Google
        </button>

        {/* Enlace login */}
        <div className="text-center">
         <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
