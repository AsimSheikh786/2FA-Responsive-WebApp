export const addToken = (data) => {
    return {
        type: "ADD_TOKEN",
        payload: {
            id: new Date().getTime().toString(),
            name: data.name,
            order: data.order
        }
    }
}