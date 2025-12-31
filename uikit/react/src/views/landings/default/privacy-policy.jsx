// @project
import { PrivacyPolicy1 } from '@/blocks/privacy-policy';
import { SmallHero3 } from '@/blocks/small-hero';

// @data
import { smallHero } from './data';

/***************************  PAGE - PRIVACY POLICY  ***************************/

export default function PrivacyPolicy() {
  return (
    <>
      <SmallHero3 {...smallHero} />
      <PrivacyPolicy1 />
    </>
  );
}
