

class AuthClient {


    getToken() {
        const token = sessionStorage.getItem('accessToken');
        return token
    }

    signOut() {
        sessionStorage.clear();
        return {};
    }
     loginwithcredentials(email?: string, password?: string) {
        return email && password
    }



}
export const authentication = new AuthClient();