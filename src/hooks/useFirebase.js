import { useEffect, useState } from 'react';
import { getAuth, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const auth = getAuth();


    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(err => {
                setError('')
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user?.email) {
                setUser(user);
            }
            else {
                setUser('');
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('')
            }).catch((error) => {
                setError(error)
            });
    }

    return {
        error,
        logOut,
        isLoading,
        user,
        handleGoogleSignIn,
        setIsLoading,
        setError,
    }
};

export default useFirebase;