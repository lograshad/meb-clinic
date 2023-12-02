import "./input.css";

const InputField = ({
    type,
    placeholder,
    id,
    required,
    optional,
    value,
    onChange,
    errorMsg,
    label,
    disabled
}) => {
    return (
        <div className="input-container">
            <div className="header">
                <label htmlFor={label}>
                    {label}
                </label>
                {errorMsg !== undefined ? (
                    <p className="error-msg">{errorMsg}</p>
                ) : null}
            </div>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputField;