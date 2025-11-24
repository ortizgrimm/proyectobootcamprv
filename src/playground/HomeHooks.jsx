import { Link } from "react-router-dom";

function Homehooks() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ejemplos de Hooks en React</h1>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Hook</th>
            <th>Ruta</th>
            <th>Descripción</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>useState</td>
            <td>
              <Link to="/usestate" className="btn btn-primary btn-sm">
                Ir a ejemplo
              </Link>
            </td>
            <td>Maneja el estado interno del componente.</td>
            <td>Estado</td>
          </tr>

          <tr>
            <td>useNavigate</td>
            <td>
              <Link to="/navegacion" className="btn btn-primary btn-sm">
                Ir a ejemplo
              </Link>
            </td>
            <td>Hook para navegación con React Router.</td>
            <td>Navegación</td>
          </tr>

          <tr>
            <td>NuevoHook</td>
            <td>
              <Link to="/nuevo" className="btn btn-primary btn-sm">
                Ir a ejemplo
              </Link>
            </td>
            <td>descripcion del hook.</td>
            <td>categoria</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-5 text-start">
        <h3>Categorías y Hooks Oficiales (React 19)</h3>

        <ul>
          <li>
            <strong>Estado:</strong>
            <ul>
              <li>useState</li>
              <li>useReducer</li>
              <li>useOptimistic</li>
            </ul>
          </li>

          <li>
            <strong>Efectos:</strong>
            <ul>
              <li>useEffect</li>
              <li>useInsertionEffect</li>
              <li>useLayoutEffect</li>
            </ul>
          </li>

          <li>
            <strong>Contexto:</strong>
            <ul>
              <li>useContext</li>
            </ul>
          </li>

          <li>
            <strong>Referencias:</strong>
            <ul>
              <li>useRef</li>
              <li>useImperativeHandle</li>
              <li>useCallback</li>
              <li>useMemo</li>
            </ul>
          </li>

          <li>
            <strong>Renderizado y Transiciones:</strong>
            <ul>
              <li>useTransition</li>
              <li>useDeferredValue</li>
            </ul>
          </li>

          <li>
            <strong>Identificadores:</strong>
            <ul>
              <li>useId</li>
            </ul>
          </li>

          <li>
            <strong>Depuración:</strong>
            <ul>
              <li>useDebugValue</li>
            </ul>
          </li>

          <li>
            <strong>Experimental / React 19:</strong>
            <ul>
              <li>use</li>
              <li>useFormStatus</li>
              <li>useActionState</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Homehooks;
