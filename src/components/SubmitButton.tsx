import {Fragment} from 'react';

// Props del componente SubmitButton
interface SubmitButtonProps {
    title: string;
}

const SubmitButton = (props: SubmitButtonProps) => {

    const {title} = props;

    return (
        <Fragment>
            <div>
                <button type='submit'>{title}</button>
            </div>
        </Fragment>
    )
}

export {SubmitButton};