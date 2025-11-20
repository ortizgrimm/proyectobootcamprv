import { useState } from "react";

function Loginpage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("");

  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleSave = () => {
    setAlertMessage(null);

    if (!newPassword.trim() || !confirmPassword.trim()) {
      setAlertType("danger");
      setAlertMessage("⚠️ Todos los campos son obligatorios.");
      return;
    }

    if (newPassword.length < 6) {
      setAlertType("danger");
      setAlertMessage("⚠️ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setAlertType("danger");
      setAlertMessage("❌ Las contraseñas no coinciden.");
      return;
    }

    setAlertType("success");
    setAlertMessage("✔ Tu contraseña ha sido actualizada correctamente.");
  };

  return (
    <div
       className="d-flex justify-content-center align-items-center"
  style={{ minHeight: "100vh", backgroundColor: "white" }}
    >
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4 fw-bold">Restablecer Contraseña</h3>

        {/* ALERTA */}
        {alertMessage && (
          <div className={`alert alert-${alertType}`}>{alertMessage}</div>
        )}

        {/* Nueva contraseña */}
        <div className="mb-3">
          <label className="form-label fw-bold">Nueva contraseña</label>
          <div className="input-group">
            <input
              type={showPass1 ? "text" : "password"}
              className="form-control"
              placeholder="Ingresa tu nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary-bg"
              onClick={() => setShowPass1(!showPass1)}
            >
              👁️
            </button>
          </div>
        </div>

        {/* Confirmar contraseña */}
        <div className="mb-3">
          <label className="form-label fw-bold">Confirmar contraseña</label>
          <div className="input-group">
            <input
              type={showPass2 ? "text" : "password"}
              className="form-control"
              placeholder="Repite tu nueva contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary-bg"
              onClick={() => setShowPass2(!showPass2)}
            >
              👁️
            </button>
          </div>
        </div>

        {/* Botón Guardar */}
        <button className="btn btn-primary w-100 mb-3" onClick={handleSave}>
          Guardar nueva contraseña
        </button>

        {/* Volver */}
        <div className="text-center">
          <a href="/login">Volver al inicio de sesión</a>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
