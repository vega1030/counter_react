import { useDispatch, useSelector } from "react-redux";
import './contador.css'
function Contador() {
    const contador = useSelector((state) => state.numero);
    const dispatch = useDispatch()
    return (
        <div className="main-content">
            <div className="card">
                <div className="main-content__title">
                    <h1>
                        Contador
                    </h1>
                    <h2>
                        {contador}
                    </h2>
                </div>
                <div className="main-content__buttons">
                    <button onClick={() => dispatch({ type: 'DECREMENTAR' })} > - </button>
                    <button onClick={() => dispatch({ type: 'RESET' })}>Resetear</button>
                    <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>+</button>
                </div>
            </div>
        </div>
    )
}
export default Contador;