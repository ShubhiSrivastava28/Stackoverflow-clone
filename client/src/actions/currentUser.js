export const setCurrentUser = (data) => {
    return{
        type: 'FETCH_CURRENT_USER',
        playload: data
    }
}