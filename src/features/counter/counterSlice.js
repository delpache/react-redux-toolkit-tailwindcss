import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// La fonction ci-dessous est appelée un thunk et nous permet d'exécuter une logique asynchrone. 
// Elle peut être distribuée comme une action normale : `dispatch(incrementAsync(10))`. 
// Ceci appellera le thunk avec la fonction `dispatch` comme premier argument. Async
// peut alors être exécuté et d'autres actions peuvent être distribuées.
export const incrementAsync = (amount) => (dispatch) => {
    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)
}

// La fonction ci-dessous s'appelle un sélecteur et nous permet de sélectionner une valeur à partir de
// l'état. Les sélecteurs peuvent également être définis en ligne où ils sont utilisés à la place de la fonction
// dans le fichier slice. Par exemple : `useSelector((state) => state.counter.value)`
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;