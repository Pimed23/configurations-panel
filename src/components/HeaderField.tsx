import '../styles/HeaderField.css';

// Props del componente InputField
interface HeaderFieldProps {
    title: string;
    subtitle: string;
}

const HeaderField = (props: HeaderFieldProps) => {

    const {title, subtitle} = props;

    return (
        <div className='HeaderField'>
            <h1>{title}</h1>
            <h4 className='subtitle'>{subtitle}</h4>
        </div>
    )
}

export {HeaderField};