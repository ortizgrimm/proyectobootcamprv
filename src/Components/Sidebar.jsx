import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Swal from "sweetalert2";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Confirmación antes de cerrar sesión
    const result = await Swal.fire({
      title: "¿Cerrar sesión?",
      text: "¿Estás seguro de que quieres cerrar sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, cerrar",
      cancelButtonText: "Cancelar",
    });

    // Si cancela → no hace nada
    if (!result.isConfirmed) return;

    try {
      // Cerrar sesión
      await signOut(auth);

      Swal.fire({
        icon: "success",
        title: "Sesión cerrada",
        text: "Has cerrado sesión correctamente.",
        timer: 1800,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo cerrar sesión.",
      });
    }
  };

  return (
    <div
      className="bg-dark text-white p-3"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h4 className="mb-4">Menú</h4>

      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/users">
            Lista de usuarios
          </Link>
        </li>

        {/* Botón para cerrar sesión */}
        <li className="nav-item mt-4">
          <button
            onClick={handleLogout}
            className="btn btn-danger w-100"
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
