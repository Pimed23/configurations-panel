import '../styles/SubmitButton.css'

// Props del componente SubmitButton
interface SubmitButtonProps {
    title: string;
    disableBtn: boolean;
}

const SubmitButton = (props: SubmitButtonProps) => {

    const {title, disableBtn} = props;

    return (
        <div className='SubmitButton'>
            <button 
                className='btn' 
                type='submit'
                disabled={disableBtn}
            >{title}</button>
        </div>
    )
}

export {SubmitButton};