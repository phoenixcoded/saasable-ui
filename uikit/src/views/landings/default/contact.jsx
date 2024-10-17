// @project
import { Cta5 } from '@/blocks/cta';
import { ContactUs4 } from '@/blocks/contact-us';

// @data
import { cta5, contactUS } from './data';

/***************************  PAGE - CONTACT  ***************************/

export default function Contact() {
  return (
    <>
      {/* contact us section */}
      <ContactUs4 {...contactUS} />

      {/* call to action section */}
      <Cta5 {...cta5} />
    </>
  );
}
