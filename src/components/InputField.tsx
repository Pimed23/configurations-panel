import {Fragment} from 'react';

// Props del componente InputField
interface InputFieldProps {
    title: string;
    message: string;
    setBusinessName: (val: string) => void;
}

const InputField = (props: InputFieldProps) => {

    const {title, message, setBusinessName} = props;

    return (
        <Fragment>
            <div>
                <label>{title}</label>
                <br/>
                <input 
                    name = 'businessName' 
                    placeholder = {message}
                    onChange={(e) => {setBusinessName(e.target.value)}}
                ></input>
            </div>
        </Fragment>
    )
}

export {InputField};