import { createSelector } from "reselect";

export const getAllUsers = (state) => {
    return state.users.users;
}

export const getUserSuperSelector = createSelector(getAllUsers, (users) => {
    return users.filter(i => true);
})


export const getOffset = (state) => {
    return state.users.offset
}

export const getLoad = (state) => {
    return state.users.load
}

export const getDisabled = (state) => {
    return state.users.disabled
}