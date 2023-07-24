export const addToken = (data) => {
    return {
        type: "ADD_TOKEN",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}