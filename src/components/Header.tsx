import {Fragment} from 'react';

// Props del componente InputField
interface HeaderFieldProps {
    title: string;
    subtitle: string;
}

const HeaderField = (props: HeaderFieldProps) => {

    const {title, subtitle} = props;

    return (
        <Fragment>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </Fragment>
    )
}

export {HeaderField};