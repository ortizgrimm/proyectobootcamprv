import {useState, useEffect } from "react";
import {Link} from "react-router-dom";

function EjemploUseEffect() {
  const [count, setCount] = useState(0);

  // Se ejecuta cada vez que cambia "count"
  useEffect(() => {
    console.log(`El contador cambió: ${count}`);

    // Función de limpieza (cleanup)
    return () => {
      console.log("Limpieza del useEffect...");
    };
  }, [count]); // Dependencia: solo cuando count cambia

  return (
    <div className="container text-center mt-4">
      <h2>Ejemplo useEffect</h2>
      <br />
      <p>Contador: {count}</p>
      <button 
        className="btn btn-primary"
        onClick={() => setCount(count + 1)}
      >
        Aumentar
      </button>
      <br />
      <Link to="/hooks" className="btn btn-success mt-2">Ir a home hooks</Link>
    </div>
    
  );
}

export default EjemploUseEffect;
