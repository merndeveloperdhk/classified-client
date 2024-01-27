import MessageLeft from "./MessageLeft";
import MessageRight from "./MessageRight";


const ContactMessage = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 justify-between">
            <MessageLeft></MessageLeft>
            <MessageRight></MessageRight>
        </div>
    );
};

export default ContactMessage;