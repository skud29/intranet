import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout
};

function login(username, password) {
    const authString = username+':'+password;
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization': 'Basic ' + btoa(authString) },
    };

    return fetch('https://intranet.ods.fr:3421/api/users/authenticate/'+username, requestOptions)
        .then(response => {
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user && user._id) {
                // save the token
                user.token = btoa(username+':'+password);
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}