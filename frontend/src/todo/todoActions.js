import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createAT`)
        return {
            type: 'TODO_SEARCHED',
            payload: request
        }
}

//Deixando de receber uma Action e retornando um método
//ele recebe como parametro o Dispatch que é quem vai
//disparar as ações para os Reducers
export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}