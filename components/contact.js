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

function Info( { icon, title, content, link }) {
    return (
        <a href={link} target="_blank" rel="noreferrer">
        <div className="flex flex-col gap-4 items-start justify-center border-2 border-rose-600 p-4 rounded hover:bg-rose-600 hover:text-white transition">
            <FontAwesomeIcon icon={icon} className="h-6" />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{content}</p>
        </div>
        </a>
    );
}

export default function Contact() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
           
            <div className="flex flex-col col-span-2 justify-between gap-4">
                <div className='flex flex-col gap-4'>
                    <h1 className="text-2xl font-bold">Who's reaching out?</h1>
                    <div className="grid grid-cols-2 gap-4 h-min">
                        <Field label="First Name" type="text" placeholder="John" />
                        <Field label="Last Name" type="text" placeholder="Doe" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">How can we reach you?</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Email" type="email" placeholder="john@gmail.com" />
                        <Field label="Phone" type="tel" placeholder="123-456-7890" />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl font-bold">What can we do for you?</h1>
                    <Field label="Message" type="text" placeholder="Hello, I would like to..." />
                </div>
            </div>

            <div className="flex flex-col gap-4 col-span-full sm:col-span-1">
                <Info icon={faEnvelope} title="Email us" content="contact@firewave.dev" link="mailto:contact@firewave.dev" />
                <Info icon={faPhone} title="Call us" content="925-451-2502" link="tel:925-451-2502" />
                <Info icon={faMapPin} title="Location" content="San Francisco, CA" link="https://goo.gl/maps/inevejAFW6WsbnsK6" />
                <button className="bg-rose-600 text-white rounded-md p-2 col-start-3">Send</button>
            </div>
        </div>
    );
}