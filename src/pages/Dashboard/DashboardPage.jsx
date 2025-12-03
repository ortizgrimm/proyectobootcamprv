import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { auth } from "../../firebase";

function DashboardPage() {

  const user = auth.currentUser;

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div className="flex-grow-1 d-flex flex-column">

        {/* Navbar */}
        <Navbar />

        {/* Contenido interno */}
        <main className="p-4" style={{ flexGrow: 1 }}>

          {/* -------- DATOS DEL USUARIO -------- */}
          {user && (
            <div className="card mb-4 p-3 d-flex align-items-center" style={{ maxWidth: "350px" }}>
              <img
                src={user.photoURL}
                alt="Foto usuario"
                className="rounded-circle mb-3"
                width="90"
                height="90"
              />

              <h5 className="mb-1">{user.displayName}</h5>
              <p className="text-muted mb-1">{user.email}</p>
            </div>
          )}
          {/* ------------------------------------ */}

          <h2>Bienvenido al Dashboard</h2>
          <p>Contenido principal aquí...</p>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default DashboardPage;
