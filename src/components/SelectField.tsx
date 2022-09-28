import React, {Fragment} from 'react';

// Propos del componente SelectField
interface SelectFieldProps {
    title: string;
    setSelectedOption: (val: string) => void;
    selectOptions: {
        key: string,
        value: string, 
        option: string
    }[];
}

const SelectField = (props: SelectFieldProps) => {

    const {title, selectOptions, setSelectedOption} = props;

    return (
        <Fragment>
            <div>
                <label>{title}</label>
                <br/>
                <select onChange={(e) => {setSelectedOption(e.target.value)}}>
                    {selectOptions.map(element => (
                        <option 
                            key={element.key}
                            value={element.value}>
                            {element.option}
                        </option>
                    ))};
                </select>
            </div>
        </Fragment>
    )
}

export {SelectField};