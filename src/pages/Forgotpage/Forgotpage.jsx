import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";  // AJUSTA la ruta según tu proyecto
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function ForgotPage() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);

      Swal.fire({
        icon: "success",
        title: "Correo enviado",
        text: "Revisa tu correo para restablecer tu contraseña.",
      }).then(() => {
        navigate("/"); // ⬅️ Redirección al login
      });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No pudimos enviar el correo. Verifica que esté registrado.",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Recuperar Contraseña</h3>

        <p className="text-muted text-center">
          Ingresa tu correo y te enviaremos un enlace para recuperar tu contraseña.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input 
              type="email"
              className="form-control"
              placeholder="ejemplo@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button className="btn btn-warning w-100">Enviar enlace</button>
        </form>

        <div className="text-center mt-3">
          <a href="/">Volver al login</a>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;