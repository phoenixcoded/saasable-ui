// @project
import { SmallHero3 } from '@/blocks/small-hero';
import TermsConditionPage from '@/blocks/TermsCondition';

// @data
import { smallHero1 } from './data';

/***************************  PAGE - TERMS CONDITION  ***************************/

export default function TermsCondition() {
  return (
    <>
      <SmallHero3 {...smallHero1} />
      <TermsConditionPage />
    </>
  );
}
