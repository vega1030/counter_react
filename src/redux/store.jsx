import { createStore } from "redux";

const estadoInicial = {
    numero: 0,
}


function reducer(state = estadoInicial, action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return {
                numero: state.numero + 1,
            }
        case 'DECREMENTAR':
            return {
                numero: state.numero - 1
            }
        case 'RESET':
            return {
                numero: 0
            }
        default:
            return state;
    }
}
export default createStore(reducer)

