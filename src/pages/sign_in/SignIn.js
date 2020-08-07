import React from "react"
import axios from 'axios'
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

const SignIn = () => {

    const {register, errors, handleSubmit} = useForm();

    function onSubmitHandler(e) {
        const user = {
            userName: e.userName,
            password: e.password,
        };
        console.log(user)
        // const url = "";
        // axios.post(url, user).then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err)
        // })
    }

    return (
        <div className="col-md-8 col-10 offset-1 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 offset-md-2">
            {/* using the form from bootstrap*/}
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <label htmlFor="userName">Username:</label>
                <input type="text" className="form-control" id="userName"
                       ref={register({required: true})} name="userName"/>
                {errors.userName && <p className="text-danger">this field is required</p>}

                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password"
                       ref={register({required: true, minLength: 8})} name="password"/>
                {errors.userName && errors.userName.type === 'required' &&
                <p className="text-danger">this field is required</p>}
                {errors.userName && errors.userName.type === 'minLength' &&
                <p className="text-danger">this field is required</p>}

                <button type="submit" className="btn mt-3 btn-primary btn-block">sign in
                </button>
                <p className="text-center">Have not you registered yet? Let's sign up</p>
                <NavLink exact to="/sign_up">
                    <button type="button" className="btn btn-success btn-block">Sign up</button>
                </NavLink>
            </form>
        </div>
    )
};

export default SignIn