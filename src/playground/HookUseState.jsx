import{useState } from "react"
function Contador() {

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);
    const [color, setColor] = useState("withe")

function aumentar(){
    setCount(count+1);
}

function disminuir(){
    setCount(count-1);
}
    return (
        <div className="container text-center">
            <h1>Contador: {count}</h1>
            <div className="btn-group">
                <button onClick={aumentar} className="btn btn-success">Aumentar</button>
                <button onClick={disminuir}className="btn btn-danger">Disminuir</button>
            </div>
            <br />
            <div className="btn-group">
                <button onClick={()=> setCount(count+1)} className="btn btn-success">Aumentar</button>
                <button onClick={()=> setCount(count-1)}className="btn btn-danger">Disminuir</button>
            </div>
            <br />
            <button onClick={()=> setVisible(!visible)} className = "btn btn-info">
            {visible ? "ocultar" : "mostrar"} Texto
            </button>
            {visible && <h2> Hola soy Visible</h2>}
            <br />
            <div style={{backgroundColor: color, padding: 30}}>
                <h2>Color actual: {color} </h2>
                <button className="btn btn-secondary" onClick={()=> setColor("red")}>Rojo</button>
                <button className="btn btn-secondary" onClick={()=> setColor("blue")}>Azul</button>
                <button className="btn btn-secondary" onClick={()=> setColor("orange")}>Naranja</button>
                <button className="btn btn-secondary" onClick={()=> setColor("white")}>Blanco</button>
            </div>
            
        </div>
    );
}

export default Contador;
