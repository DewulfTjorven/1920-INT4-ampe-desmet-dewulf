import "firebase/auth";

class AuthService {
    constructor(firebase, onAuthStateChanged) {
        this.auth = firebase.auth();
        this.auth.onAuthStateChanged(user => onAuthStateChanged(user))
    }

    login = async (email, password) => {
        try {
            const result = await this.auth.signInWithEmailAndPassword(email, password);
            return result;
        } catch (error) {
            return error.code;
        }
    }

    logout = async () => {
        try {
            const result = this.auth.signOut();
            return result;
        } catch (error) {
            return error.code;
        }
    };

    register = async (name, avatar, email, password,) => {
        //console.log(name, email, password);
        try {
            const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
            if (userCredential) {
                try {
                    await userCredential.user.updateProfile({
                        displayName: name,
                        photoUrl: avatar
                    });
                } catch (error) {
                    return error.code;
                }
            }
            return userCredential.user;
        } catch (error) {
            return error.code;
        }
    }
}

export default AuthService;