import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
    const { handleGoogleSignIn, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const signInUsingGoogle = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className='pt-5'>
            <div className="d-flex align-items-center justify-content-center" style={{ height: '70vh' }}>
                <div>
                    <div className="mt-4 text-center">
                        <img src="https://i.ibb.co/Gc7FXc7/fe59cde6d84c42049ac692ee84775332.png" alt="" />
                    </div>
                    <div className=" mt-0 text-center shadow-sm border border-2 p-3"  >
                        <div className="d-flex justify-content-around align-items-center mb-5 p-0 pe-2">

                            <div className="p-5">
                                <h4 className="mt-5 mb-3">Login With</h4>
                                <div className="d-flex justify-content-around align-items-center mb-5 p-0 pe-2 btn-login">
                                    <div className="m-0 me-2" onClick={signInUsingGoogle} >
                                        <img src="https://i.ibb.co/RywzMBF/7123025-logo-google-g-icon.png" className="img-fluid" alt="" />
                                    </div>
                                    <h6 className="p-0 m-0" >Continue With Google</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;