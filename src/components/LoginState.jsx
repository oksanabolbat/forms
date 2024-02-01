import { useState } from "react";
import Input from "./Input";
import useInput from "../hooks/useInput";
import { hasMinLength, isEmail } from "../util/validation";

export default function Login() {
    const {
        inputValue: emailValue,
        isNotValid: emailIsNotValid,
        handleInputChange: handleEmailChange,
        handleInputBlur: handleEmailBlur,
    } = useInput("", isEmail);

    const {
        inputValue: passwordValue,
        isNotValid: passwordIsNotValid,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
    } = useInput("", (value) => hasMinLength(value, 8));

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <h2>Login</h2>

            <div className="control-row">
                <Input
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    value={emailValue}
                    error={
                        emailIsNotValid && "Please enter a valid email address"
                    }
                />

                <Input
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={handlePasswordBlur}
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    error={
                        passwordIsNotValid && "Please enter a valid password"
                    }
                />
            </div>

            <p className="form-actions">
                <button className="button button-flat" type="reset">
                    Reset
                </button>
                <button className="button" type="submit">
                    Login
                </button>
            </p>
        </form>
    );
}
