export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

//update localstorage with state for cart
export const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
    const {type: actionType, payload: actionPayload} = action
    switch (actionType) {
        case 'ADD_TO_CART': {
            const {id} = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id)
        
            if(productInCartIndex >= 0){
                //const newState = structuredClone(state)
                //newState[productInCartIndex].quantity += 1

                //spread:
                const newState = [
                    ...state.slice(0, productInCartIndex),
                    {...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
                    ...state.slice(productInCartIndex + 1)
                ]

                updateLocalStorage(newState)
                return newState
            }
    
            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case 'REMOVE_ONE_FROM_CART': {
            const {id} = actionPayload;
            const productInCartIndex = state.findIndex(item => item.id === id)
        
            if(productInCartIndex >= 0){
                //const newState = structuredClone(state)
                //newState[productInCartIndex].quantity += 1
                let newState = [];

                //spread:
                if (state[productInCartIndex].quantity - 1 === 0){
                    newState = [
                        ...state.slice(0, productInCartIndex),
                        ...state.slice(productInCartIndex + 1)
                    ]
                } else {
                    newState = [
                        ...state.slice(0, productInCartIndex),
                        {...state[productInCartIndex], quantity: state[productInCartIndex].quantity - 1},
                        ...state.slice(productInCartIndex + 1)
                    ]
                }

                updateLocalStorage(newState)
                return newState
            }
    
            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        case 'REMOVE_FROM_CART': {
            const {id} = actionPayload
            const newState = state.filter(item => item.id !== id)
            updateLocalStorage(newState)
            return newState
        }

        case 'CLEAR_CART': {
            updateLocalStorage([])
            return []
        }
    }
    return state
}