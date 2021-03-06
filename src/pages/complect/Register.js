import React, {useRef} from 'react';
import {NavLink, Route} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Button} from "reactstrap";

function Register() {
    return (
        <div className="container mt-5">
            <div className="row">
                <Route exact path="/" component={SignIn}/>
                <Route exact path="/sign_up" component={SignUp}/>
            </div>
        </div>
    );
}

export default Register;


const SignUp = () => {
    /**  useForm() method helps working with forms and validating. https://react-hook-form.com/get-started **/
    const {register, errors, watch, handleSubmit} = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = e => {
        const user = {
            firstName: e.firstName,
            lastName: e.lastName,
            userName: e.userName,
            password: e.password,
            gender: e.gender,
            address: e.address,
            email: e.email,
            telNumber: e.telNumber,
        };
        console.log(user)
        // const url="";
        // axios.post(url, user).then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // });
    };

    return (
        <div className="col-md-8 col-lg-6 offset-lg-3 offset-md-2">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="firstName">First name:</label>
                <input type="text" name="firstName" className="form-control"
                    // ref={register} registers inputs
                       ref={register({required: true, minLength: 2})} id="firstName" placeholder="firstName"/>
                {/*   "errors" helps show the error   */}
                {errors.firstName && errors.firstName.type === 'required' &&
                <p className="text-danger">this field is required</p>}
                {errors.firstName && errors.firstName.type === 'minLength' &&
                <p className="text-danger">required min length of 2</p>}

                <label htmlFor="lastName">Last name:</label>
                <input type="text" name="lastName" className="form-control"
                       ref={register({required: true, minLength: 2})} id="lastName" placeholder="lastName"/>
                {errors.lastName && errors.lastName.type === 'required' &&
                <p className="text-danger">this field is required</p>}
                {errors.lastName && errors.lastName.type === 'minLength' &&
                <p className="text-danger">required min length of 2</p>}

                <label htmlFor="userName">Username:</label>
                <input type="text" name="userName" className="form-control" id="userName"
                       ref={register({required: true})} placeholder="username"/>
                {errors.userName && <p className="text-danger">this field is required</p>}

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" className="form-control"
                       ref={register({required: true, minLength: 6})} id="email" placeholder="email"/>
                {errors.lastName && errors.lastName.type === 'required' &&
                <p className="text-danger">this field is required</p>}
                {errors.lastName && errors.lastName.type === 'minLength' &&
                <p className="text-danger">required min length of 6</p>}

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" className="form-control" id="password"
                       ref={register({required: true, minLength: 8})} placeholder="password"/>
                {errors.password && errors.password.type === 'required' &&
                <p className="text-danger">this field is required</p>}
                {errors.password && errors.password.type === 'minLength' &&
                <p className="text-danger">required min length of 8</p>}

                <label htmlFor="confirmPassword">Confirm password:</label>
                <input type="password" name="confirmPassword" className="form-control" id="confirmPassword"
                       ref={register({
                           required: true, minLength: 8, validate: value =>
                               value === password.current || "The passwords do not match"
                       })} placeholder="confirm password"/>
                {errors.confirmPassword && errors.confirmPassword.type === 'required' &&
                <p className="text-danger">this field is required</p>}
                {errors.confirmPassword && errors.confirmPassword.type === 'minLength' &&
                <p className="text-danger">required min length of 8</p>}
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}

                <label htmlFor="telNumber">Telephone number:</label>
                <input type="tel" name="telNumber" className="form-control" id="telNumber"
                       ref={register({required: true, minLength: 9})} placeholder="telephone number"/>
                {errors.telNumber && errors.telNumber.type === 'required' &&
                <p className="text-danger">this field is required</p>}
                {errors.telNumber && errors.telNumber.type === 'minLength' &&
                <p className="text-danger">required min length of 9</p>}

                <label htmlFor="gender">Gender:</label>
                <select className="form-control" name="gender" id="gender"
                        ref={register}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>

                <label htmlFor="address">Address</label>
                <textarea name="address" className="form-control" id="address" rows="3"
                          ref={register({required: true})}/>
                {errors.address && errors.address.type === 'required' &&
                <p className="text-danger">this field is required</p>}

                <Button className="mt-2 btn-block" type="submit">Submit</Button>
            </form>
        </div>
    );
};

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