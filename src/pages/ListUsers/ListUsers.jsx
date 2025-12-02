import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Referencia a la colección "users"
    const usersRef = collection(db, "users");

    // Escucha en tiempo real
    const unsubscribe = onSnapshot(usersRef, (snapshot) => {
      const userList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUsers(userList);
    });

    // Limpieza del listener
    return () => unsubscribe();
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.uid}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>{u.creadoEn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUsers;
