import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [didEdit, setDidEdit] = useState({ email: false, password: false });

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
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onBlur={() => handleBlurChange("email")}
                        onChange={(event) =>
                            handleInputChange("email", event.target.value)
                        }
                        value={formData.email}
                    />
                    <div className="control-error">
                        {!formData.email.includes("@") && didEdit.email && (
                            <p>Please enter a valid email address</p>
                        )}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onBlur={() => handleBlurChange("password")}
                        onChange={(event) =>
                            handleInputChange("password", event.target.value)
                        }
                        value={formData.password}
                    />
                    <div className="control-error">
                        {formData.password.length < 8 && didEdit.password && (
                            <p>Please enter a valid password (min 8 symbols)</p>
                        )}
                    </div>
                </div>
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
