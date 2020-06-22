import "firebase/auth";

class AuthService {
    constructor(firebase) {
        this.auth = firebase.auth();
    }

    login = async (email, password) => {
        try {
            const result = this.auth.signInWithEmailAndPassword(email, password);
            return result;
        } catch (error) {
            return error.code;
        }
    };
    login = async () => {
        try {
            const result = this.auth.signOut();
            return result;
        } catch (error) {
            return error.code;
        }
    };
}

export default AuthService;