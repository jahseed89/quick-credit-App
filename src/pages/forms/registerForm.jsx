import "./registerForm.scss";
import Button from "../login/buttons/signupBtn";
import {GiBoltEye} from "react-icons/gi"

const RegisterForm = (props)=>{

    return (
            <div className="form__container">
                <form>
                    <div className="emailInput__container">
                        <label>{props.lable}</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="passwardInput__container">
                        <label>{props.password}</label>
                        <input type="password" placeholder="Enter Password" />
                        <span className="eye__icon"><GiBoltEye /></span>
                    </div>
                    <p className="forgotPass">{props.forgotpass}</p>
                    <Button text= "Login"/>
                    <div className="accTxt__container"><p>Don't have an account? </p><span className="register__link">Register</span> </div>
                </form>
            </div>
        )
}
export default RegisterForm;