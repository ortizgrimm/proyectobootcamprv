import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function DashboardPage() {
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
