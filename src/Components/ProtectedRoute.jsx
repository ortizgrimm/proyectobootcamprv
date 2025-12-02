import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // Mientras Firebase verifica la sesión, no mostramos nada
  if (loading) return null;

  // Si no hay usuario → mostrar alerta y redirigir
  if (!user) {
    Swal.fire({
      icon: "error",
      title: "Acceso denegado",
      text: "Por favor inicia sesión.",
      confirmButtonText: "Entendido",
    });
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
