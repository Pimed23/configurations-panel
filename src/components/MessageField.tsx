import '../styles/MessageField.css';

interface MessageFieldProps {
    type: string;
    message: string;
    messageClass: string;
}

const MessageField = (props: MessageFieldProps) => {

    const {type, message, messageClass} = props; 
    
    return (
        <div className={messageClass}>
            <label className='message-text'>{type} {message}</label>
        </div> 
    );
}

export {MessageField};