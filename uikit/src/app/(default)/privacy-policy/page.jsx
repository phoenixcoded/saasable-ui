// @next
import dynamic from 'next/dynamic';

// @project
const PrivacyPolicy = dynamic(() => import('@/views/landings/default/privacy-policy'));

/*************************** PAGE - PRIVACY POLICY ***************************/

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
