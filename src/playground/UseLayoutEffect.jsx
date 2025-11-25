import { useState, useRef, useLayoutEffect } from "react";
import { Link} from "react-router-dom";

function EjemploUseLayoutEffect() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    // Se ejecuta ANTES del pintado visual (layout)
    const boxWidth = boxRef.current.getBoundingClientRect().width;
    setWidth(boxWidth);
    console.log("Medido en useLayoutEffect:", boxWidth);
  });

  return (
    <div className="container text-center mt-4">
      <h2>Ejemplo useLayoutEffect</h2>

      <div 
        ref={boxRef}
        style={{
          background: "#007bff",
          padding: "20px",
          color: "white",
          margin: "20px auto",
          width: "50%"
        }}
      >
        Este es un div cuyo ancho se está midiendo
      </div>

      <p>Ancho medido: {width}px</p>
      <br />
      <Link className= "btn btn-success mt-2" to="/hooks">Ir a home hooks</Link>
    </div>
  );
}

export default EjemploUseLayoutEffect;
