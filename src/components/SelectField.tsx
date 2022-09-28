import '../styles/SelectField.css'
// Props del componente SelectField
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

        <div className='SelectField'>
            <label className='select-label'>{title}</label>
            <br/>
            {/* Generando el select con los selectOptions enviados*/}
            <select className='select-box' onChange={(e) => {setSelectedOption(e.target.value)}}>
                {selectOptions.map(element => (
                    <option 
                        key={element.key}
                        value={element.value}>
                        {element.option}
                    </option>
                ))};
            </select>
        </div>
    )
}

export {SelectField};