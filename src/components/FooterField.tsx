import '../styles/FooterField.css';

// Props del componente InputField
interface FooterFieldProps {
    message: string;
    link: string;
}

const FooterField = (props: FooterFieldProps) => {

    const {message, link} = props;

    return (
        <div className="FooterField">
            {message}
            <a href="http://exponentia.tech/">{link}</a>
        </div>
)
}

export {FooterField};