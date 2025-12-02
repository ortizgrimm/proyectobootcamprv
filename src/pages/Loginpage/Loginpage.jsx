import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Firebase
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
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

    const { email, password } = form;

    // VALIDACIONES
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor ingresa tu correo y contraseña.",
      });
      return;
    }

    try {
      // LOGIN FIREBASE
      await signInWithEmailAndPassword(auth, email, password);

      Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Inicio de sesión exitoso.",
        showConfirmButton: false,
        timer: 2000,
      });

      // REDIRECCIONAR
      navigate("/dashboard");

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error al iniciar sesión",
        text: "Correo o contraseña incorrectos.",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "380px" }}>
        <h3 className="text-center mb-3">Iniciar Sesión</h3>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
              placeholder="ejemplo@gmail.com"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>

            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                value={form.password}
                onChange={handleChange}
                placeholder="****"
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
          </div>

          <button className="btn btn-primary w-100">Ingresar</button>
        </form>

        <div className="text-center mt-3 d-flex flex-column">
          <Link to="/forgot" className="text-decoration-none mb-2">
            ¿Olvidaste tu contraseña?
          </Link>

          <Link to="/register" className="text-decoration-none">
            Crear una cuenta
          </Link>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;