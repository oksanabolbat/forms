import { useState } from "react";
const useInput = (defaultValue, validateFn) => {
    const [inputValue, setInputValue] = useState(defaultValue);
    const [didEdit, setDidEdit] = useState(defaultValue);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setDidEdit(false);
    };

    const handleInputBlur = () => {
        console.log("blur");
        setDidEdit(true);
    };
    const isNotValid = didEdit && !validateFn(inputValue);
    console.log(didEdit, validateFn);
    return { inputValue, isNotValid, handleInputChange, handleInputBlur };
};

export default useInput;
