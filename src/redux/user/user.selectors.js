import { createSelector } from 'reselect';


const selectUser = state => state.user;

// selectUser output selector
export const selectCurrentUser = createSelector (
    [selectUser],
    (user) => user.currentUser
);