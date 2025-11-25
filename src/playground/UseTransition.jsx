import { useState, useTransition } from "react";
import { Link } from "react-router-dom";

function UseTransition() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      const temp = [];
      for (let i = 0; i < 20000; i++) {
        temp.push(`${value} - elemento ${i}`);
      }
      setItems(temp);
    });
  };

  return (
    <div className="container text-center mt-5">
      <h2>Ejemplo useTransition con Spinner</h2>

      <input
        type="text"
        className="form-control w-50 mx-auto mt-3"
        placeholder="Escribe algo..."
        value={text}
        onChange={handleChange}
      />

      {isPending && (
        <div className="d-flex justify-content-center mt-3">
          <div className="spinner-border text-primary" role="status"></div>
          <span className="ms-2">Cargando datos...</span>
        </div>
      )}

      <ul
        className="mt-4"
        style={{ maxHeight: "200px", overflowY: "scroll", padding: 0 }}
      >
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      <Link className= "btn btn-success mt-2" to="/hooks">Ir a home hooks</Link>
    </div>
  );
}

export default UseTransition;
