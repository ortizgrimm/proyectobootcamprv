import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Firebase
import { auth } from "../../firebase";
import {
  verifyPasswordResetCode,
  confirmPasswordReset,
} from "firebase/auth";

function ResetPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Token que viene por URL
  const oobCode = searchParams.get("oobCode");

  const [isValidCode, setIsValidCode] = useState(false);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // Validar token al cargar la página
  useEffect(() => {
    async function checkCode() {
      try {
        const emailFromCode = await verifyPasswordResetCode(auth, oobCode);
        setEmail(emailFromCode);
        setIsValidCode(true);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Enlace inválido o vencido",
          text: "Solicita nuevamente la recuperación.",
        });
        navigate("/forgot");
      }
    }

    checkCode();
  }, [oobCode, navigate]);

  // Enviar nueva contraseña
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!password || !repeatPassword) {
      Swal.fire({
        icon: "warning",
        title: "Campos vacíos",
        text: "Debes ingresar ambas contraseñas.",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Contraseña muy corta",
        text: "Debe tener al menos 6 caracteres.",
      });
      return;
    }

    if (password !== repeatPassword) {
      Swal.fire({
        icon: "error",
        title: "Contraseñas no coinciden",
        text: "Por favor verifica la contraseña.",
      });
      return;
    }

    try {
      await confirmPasswordReset(auth, oobCode, password);

      Swal.fire({
        icon: "success",
        title: "Contraseña actualizada",
        text: "Ahora puedes iniciar sesión.",
        timer: 2500,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  if (!isValidCode) return null; // mientras verifica

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Restablecer Contraseña</h3>

        <p className="text-muted text-center">Correo: <b>{email}</b></p>

        <form onSubmit={handleResetPassword}>
          <div className="mb-3">
            <label className="form-label">Nueva contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="****"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirmar contraseña</label>
            <input
              type="password"
              className="form-control"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              placeholder="****"
            />
          </div>

          <button className="btn btn-primary w-100">Restablecer</button>
        </form>

        <div className="text-center mt-3">
          <Link to="/" className="text-decoration-none">Volver al login</Link>
        </div>
      </div>
    </div>
  );
}

export default ResetPage;