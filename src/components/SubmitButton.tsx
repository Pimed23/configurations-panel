import '../styles/SubmitButton.css'

// Props del componente SubmitButton
interface SubmitButtonProps {
    title: string;
}

const SubmitButton = (props: SubmitButtonProps) => {

    const {title} = props;

    return (
        <div className='SubmitButton'>
            <button className='btn' type='submit'>{title}</button>
        </div>
    )
}

export {SubmitButton};