'use client';

import { useEffect, useState } from 'react';

// @third-party
import axios from 'axios';

// @project
import { Benefit5 } from '@/blocks/benefit';
import { Cliental3 } from '@/blocks/cliental';
import { Cta4, Cta5 } from '@/blocks/cta';
import { Faq6 } from '@/blocks/faq';
import { Feature20, Feature18, Feature21 } from '@/blocks/feature';
import { Hero17 } from '@/blocks/hero';
import { Integration2 } from '@/blocks/integration';
import { Other1 } from '@/blocks/other';
import { Pricing9 } from '@/blocks/pricing';
import { Testimonial10 } from '@/blocks/testimonial';

// @data
import {
  benefit,
  cliental,
  cta4,
  cta5,
  faq,
  feature20,
  feature21,
  feature18,
  hero,
  integration,
  other,
  pricing,
  testimonial
} from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  // removed heading and caption and setup state with axios price
  const [newPricing, setNewPricing] = useState(pricing);

  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        await axios.get('https://raw.githubusercontent.com/phoenixcoded/phoenixcoded.github.io/main/saas-able-pricing.json').then((res) => {
          const data = res.data;
          setNewPricing({
            ...newPricing,
            plans: newPricing.plans.map((item, index) => ({
              ...item,
              price: data[index].price,
              offerPrice: data[index].offerPrice
            }))
          });
        });
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      }
    };

    fetchPricingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* hero section */}
      <Hero17 {...hero} />

      {/* feature section */}
      <Feature20 {...feature20} />

      {/* beniefit section */}
      <Benefit5 {...benefit} />

      {/* <Feature10 {...feature10} /> */}

      {/* integration section */}
      <Integration2 {...integration} />

      {/* other section */}
      <Other1 {...other} />

      {/* Admin section */}
      <Feature18 {...feature18} />

      {/* feature section */}
      <Feature21 {...feature21} />

      {/* call to action section */}
      <Cta4 {...cta4} />

      {/* testimonial section */}
      <Testimonial10 {...testimonial} />

      {/* cliental section */}
      <Cliental3 {...cliental} />

      {/* pricing section */}
      <Pricing9 {...pricing} />

      {/* call to action section */}
      <Cta5 {...cta5} />

      {/* frequently asked question section */}
      <Faq6 {...faq} />
    </>
  );
}
