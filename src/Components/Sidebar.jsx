function Sidebar() {
  return (
    <div 
      className="bg-dark text-white p-3"
      style={{ width: "220px", minHeight: "100vh", textAlign: "left" }}
    >
      <h4 className="mb-4">Menú</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link text-white ps-0" href="/">Inicio</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white ps-0" href="/register">Registro</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white ps-0" href="#">Opciones</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
