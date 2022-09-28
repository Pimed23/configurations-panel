import '../styles/InputField.css';

// Props del componente InputField
interface InputFieldProps {
    title: string;
    message: string;
    setBusinessName: (val: string) => void;
}

const InputField = (props: InputFieldProps) => {

    const {title, message, setBusinessName} = props;

    return (
        <div className='InputField'>
            <label className='input-label'>{title}</label>
            <br/>
            <input className='input-box'
                name = 'businessName' 
                placeholder = {message}
                onChange={(e) => {setBusinessName(e.target.value)}}
            ></input>
        </div>
    )
}

export {InputField};