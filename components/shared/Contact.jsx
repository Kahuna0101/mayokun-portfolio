import Image from "next/image";
import ContactForm from "../Form/ContactForm";

const Contact = () => {

  return (
    <section id="contact">
      <div className="flex-app">
        <h2 className="head-text">
          Book <span className="text-secondary-color">An</span> Appointment <span className="text-secondary-color">Today</span>
        </h2>

        <div className="flex flex-col md:flex-row w-full mt-9">
          <div className="flex flex-1 w-full relative">
            <Image src="/phone.png" alt="phone" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain"/>
          </div>

          <div className="flex flex-1 justify-center items-center p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
