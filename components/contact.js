import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapPin, faMap } from '@fortawesome/free-solid-svg-icons';

function Field({ label, type, placeholder }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-lg">{label}</label>
            <input className="border-0 rounded-none border-b-2 border-rose-500 outline-none bg-transparent p-2 text-white focus:ring-0 focus:border-white" type={type} placeholder={placeholder} />
        </div>
    );
}

function Info( { icon, title, content }) {
    return (
        <div className="flex flex-col gap-4 items-start justify-center border-2 border-rose-600 p-4 rounded">
            <FontAwesomeIcon icon={icon} className="h-6" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{content}</p>
        </div>
    );
}

export default function Contact() {
    return (
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="flex flex-col col-span-2 justify-between">
                
                <div className='flex flex-col gap-4'>
                    <h1 className="text-2xl font-bold">Name</h1>
                    <div className="grid grid-cols-2 gap-4 h-min">
                        <Field label="First Name" type="text" placeholder="John" />
                        <Field label="Last Name" type="text" placeholder="Doe" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Contact</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Email" type="email" placeholder="john@gmail.com" />
                        <Field label="Phone" type="tel" placeholder="123-456-7890" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">Message</h1>
                    <Field label="Message" type="text" placeholder="Hello, I would like to..." />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Info icon={faEnvelope} title="Email us" content="contact@firewave.dev" />
                <Info icon={faPhone} title="Call us" content="925-451-2502" />
                <Info icon={faMapPin} title="Location" content="San Francisco, CA" />
                <button className="bg-rose-600 text-white rounded-md p-2 col-start-3">Send</button>
            </div>
        </div>
    );
}