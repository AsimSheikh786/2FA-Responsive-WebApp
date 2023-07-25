const getTokenData = JSON.parse(localStorage.getItem('myTokenData'));

const initialState = {
    list: getTokenData ? getTokenData : [
        {
            id: 1,
            name: 'Binance Web'
        },
        {
            id: 2,
            name: 'Binance Mobile'
        },
        {
            id: 3,
            name: 'Token Dummy'
        }
    ]
}

const tokenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            const { id, name, order } = action.payload;
            
            state.list.splice(order, 0, {id: id, name: name});
            const updatedAddToken = state.list;
            // const updatedAddToken = [
            //     ...state.list,
            //     {
            //         id: id,
            //         name: data
            //     }
            // ]
            localStorage.setItem('myTokenData', JSON.stringify(updatedAddToken));

            return {
                ...state,
                list: updatedAddToken
            }

        default: return state;
    }
}

export default tokenReducer;