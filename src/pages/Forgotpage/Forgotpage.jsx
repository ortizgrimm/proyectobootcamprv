import { useState } from "react";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("");

  const handleReset = () => {
    if (!email.trim()) {
      setAlertMessage("⚠️ Debes ingresar tu correo electrónico.");
      setAlertType("danger");
      return;
    }

    setAlertMessage(
      "✔ Si tu correo está registrado, recibirás un enlace para restablecer tu contraseña."
    );
    setAlertType("success");
  };

  return (
    <div
  className="d-flex justify-content-center align-items-center"
  style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4 fw-bold">Recuperar Contraseña</h3>

        {/* ALERTA */}
        {alertMessage && (
          <div className={`alert alert-${alertType}`}>{alertMessage}</div>
        )}

        {/* CAMPO EMAIL */}
        <div className="mb-3">
          <label className="form-label fw-bold">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            placeholder="ejemplo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* BOTÓN */}
        <button className="btn btn-primary w-100 mb-3" onClick={handleReset}>
          Enviar enlace de recuperación
        </button>

        {/* VOLVER */}
        <div className="text-center">
          <a href="/login">Volver al inicio de sesión</a>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
