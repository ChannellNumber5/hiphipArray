import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken()); //decodes the token that is created when a new user is created/added to the appliation
    }

    loggedIn() {
        const token = this.getToken();
        return !token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch(err) {
            return false;
        }
    }

    getToken() {
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        localStorage.setItem('id_token', idToken);

        window.location.assign('/myprofile'); //need to figure out where we want the window to assign, should be the homepage or the profile page
    }

    logout() {
        localStorage.removeItem('id_token');

        window.location.assign('/'); //need to figure out where we want the window to assign afer logout... should be the login page, which may not be just the root /
    }
}

export default new AuthService(); //exports a new instance of AuthService