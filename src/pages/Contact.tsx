import ContactUsForm from "../components/contact/ContactUsForm";
import LocationsList from "../components/locations/LocationsList";
import ContactContentLayout from "./layouts/ContactContentLayout";
import GeneralLayout from "./layouts/GeneralLayout";

const Contact = () => {
  return (
    <>
      <GeneralLayout hideGetInTouch>
        <ContactContentLayout>
          <ContactUsForm />
          <LocationsList />
        </ContactContentLayout>
      </GeneralLayout>
    </>
  );
};

export default Contact;
