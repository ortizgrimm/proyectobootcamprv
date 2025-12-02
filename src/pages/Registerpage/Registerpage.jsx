import { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// --- Firebase ---
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth/web-extension";
import { doc, setDoc } from "firebase/firestore";

function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, repeatPassword } = form;

    // VALIDACIONES
    if (!name || !email || !password || !repeatPassword) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Todos los campos son obligatorios.",
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
        text: "Por favor verifica las contraseñas.",
      });
      return;
    }

    try {
      // Crear usuario
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Guardar usuario en Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date(),
      });

      Swal.fire({
        icon: "success",
        title: "Registro exitoso",
        text: "Usuario registrado correctamente.",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        navigate("/");  
      });

      // Limpiar
      setForm({
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error en el registro",
        text: err.message,
      });
    }
  };

  // Indicador de fortaleza
  const passwordStrength = () => {
    const len = form.password.length;
    if (!len) return "";
    if (len < 4) return "Débil";
    if (len < 8) return "Media";
    return "Fuerte";
  };

  const strengthColor = () => {
    const len = form.password.length;
    if (!len) return "";
    if (len < 4) return "text-danger";
    if (len < 8) return "text-warning";
    return "text-success";
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "480px", borderRadius: "12px" }}
      >
        <h2 className="text-center mb-4">Crear Cuenta</h2>

        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label className="form-label">Nombre Completo</label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          {/* Contraseña */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <div className="input-group">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={form.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}
                  style={{ fontSize: "1.2rem" }}
                ></i>
              </button>
            </div>

            {form.password && (
              <small className={strengthColor()}>
                Fortaleza: {passwordStrength()}
              </small>
            )}
          </div>

          {/* Repetir contraseña */}
          <div className="mb-4">
            <label className="form-label">Repetir Contraseña</label>
            <input
              name="repeatPassword"
              type="password"
              className="form-control"
              value={form.repeatPassword}
              onChange={handleChange}
            />

            {form.repeatPassword &&
              form.password !== form.repeatPassword && (
                <small className="text-danger">Las contraseñas no coinciden.</small>
              )}
          </div>

          {/* Botón */}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={
              !form.name ||
              !form.email ||
              !form.password ||
              !form.repeatPassword
            }
          >
            Registrarse
          </button>
        </form>

        {/* VOLVER AL LOGIN */}
        <div className="text-center mt-3">
          <Link to="/" className="text-decoration-none">
            <i className="bi bi-arrow-left"></i> Volver al Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;