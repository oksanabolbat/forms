import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail } from "../util/validation";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [didEdit, setDidEdit] = useState({ email: false, password: false });

    const passwordError =
        didEdit.password && !hasMinLength(formData.password, 8);
    const emailError = didEdit.email && !isEmail(formData.email);

    const handleInputChange = (identifier, value) => {
        setFormData((prev) => ({
            ...prev,
            [identifier]: value,
        }));
        setDidEdit((prev) => ({
            ...prev,
            [identifier]: false,
        }));
    };

    const handleBlurChange = (identifier) => {
        setDidEdit((prev) => ({
            ...prev,
            [identifier]: true,
        }));
    };
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
                    onBlur={() => handleBlurChange("email")}
                    onChange={(event) =>
                        handleInputChange("email", event.target.value)
                    }
                    value={formData.email}
                    error={emailError && "Please enter a valid email address"}
                />

                <Input
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    onBlur={() => handleBlurChange("password")}
                    onChange={(event) =>
                        handleInputChange("password", event.target.value)
                    }
                    value={formData.password}
                    error={passwordError && "Please enter a valid password"}
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
