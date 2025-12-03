import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot, deleteDoc, doc, updateDoc } from "firebase/firestore";
import * as bootstrap from "bootstrap";


function ListUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editNombre, setEditNombre] = useState("");
  const [editEmail, setEditEmail] = useState("");

  useEffect(() => {
    const usersRef = collection(db, "users");

    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const userList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(userList);
    });

    return () => unsubscribe();
  }, []);

  // -------------------------------------------------
  // 🔴 ELIMINAR USUARIO
  // -------------------------------------------------
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de eliminar este usuario?");
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "users", id));
      alert("Usuario eliminado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al eliminar usuario");
    }
  };

  // -------------------------------------------------
  // ✏️ ABRIR MODAL PARA EDITAR
  // -------------------------------------------------
const openEditModal = (user) => {
  setSelectedUser(user);
  setEditNombre(user.nombre);
  setEditEmail(user.email);

  const modalElement = document.getElementById("editModal");

  const modal = new bootstrap.Modal(modalElement);
  modal.show();
};


  // -------------------------------------------------
  // 💾 GUARDAR CAMBIOS DEL MODAL
  // -------------------------------------------------
  const saveChanges = async () => {
    if (!selectedUser) return;

    try {
      await updateDoc(doc(db, "users", selectedUser.id), {
        nombre: editNombre,
        email: editEmail,
      });

      alert("Usuario actualizado correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al actualizar usuario");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Listado de Usuarios</h2>

      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>UID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Fecha Registro</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.uid}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>{u.creadoEn}</td>

              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => openEditModal(u)}
                >
                  Editar
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(u.id)}
                >
                  Eliminar
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* -------------------------------------------------
          🟦 MODAL PARA EDITAR USUARIO 
      -------------------------------------------------- */}
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title" id="editModalLabel">
                Editar Usuario
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>

            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input
                  type="text"
                  className="form-control"
                  value={editNombre ?? ""}
                  onChange={(e) => setEditNombre(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  value={editEmail ?? ""}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                className="btn btn-primary"
                onClick={saveChanges}
                data-bs-dismiss="modal"
              >
                Guardar Cambios
              </button>
            </div>

          </div>
        </div>
      </div>
      {/* FIN MODAL */}
    </div>
  );
}

export default ListUsers;
