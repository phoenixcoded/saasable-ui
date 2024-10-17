// @next
import dynamic from 'next/dynamic';

// @project
const Contact = dynamic(() => import('@/views/landings/default/contact'));

/***************************  PAGE - CONTACT  ***************************/

export default function ContactPage() {
  return <Contact />;
}
