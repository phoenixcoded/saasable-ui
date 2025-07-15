// @project
import PrivacyPolicyPage from '@/blocks/PrivacyPolicy';
import { SmallHero3 } from '@/blocks/small-hero';

// @data
import { smallHero } from './data';

/***************************  PAGE - PRIVACY POLICY  ***************************/

export default function PrivacyPolicy() {
  return (
    <>
      {/* small hero section */}
      <SmallHero3 {...smallHero} />

      {/* privacy policy section */}
      <PrivacyPolicyPage />
    </>
  );
}
