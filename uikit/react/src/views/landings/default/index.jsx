'use client';

import { useEffect, useState } from 'react';

// @third-party
import axios from 'axios';

// @project
import { Feature20 } from '@/blocks/feature';
import { Hero17, Hero20 } from '@/blocks/hero';
import LazySection from '@/components/LazySection';
import { axiosMockServices } from '@/utils/axios';

// @data
import { metrics, clientele, cta4, cta5, faq, feature20, feature21, hero, hero20, integration, other, pricing, testimonial } from './data';

/***************************  PAGE - MAIN  ***************************/

export default function Main() {
  // removed heading and caption and setup state with axios price
  const [newPricing, setNewPricing] = useState(pricing);
  const [suggestedChips, setSuggestedChips] = useState([]);

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

    const fetchChipsData = async () => {
      try {
        const response = await axiosMockServices.get('/api/hero/prebuild-prompts');
        setSuggestedChips(response.data.prebuildPrompts);
      } catch (error) {
        console.error('Error fetching hero chips data:', error);
      }
    };

    fetchPricingData();
    fetchChipsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero20 {...hero20} suggestedChips={suggestedChips} sxProps={{ pt: { xs: 8, sm: 9, md: 10.5 } }} />
      <Hero17 {...hero} showDots={false} />
      <Feature20 {...feature20} />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/metrics').then((module) => ({ default: module.Metrics5 })), props: metrics },
          { importFunc: () => import('@/blocks/integration').then((module) => ({ default: module.Integration2 })), props: integration },
          { importFunc: () => import('@/blocks/other').then((module) => ({ default: module.Other1 })), props: other }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/feature').then((module) => ({ default: module.Feature21 })), props: feature21 },
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta4 })), props: cta4 }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/testimonial').then((module) => ({ default: module.Testimonial10 })), props: testimonial },
          { importFunc: () => import('@/blocks/clientele').then((module) => ({ default: module.Clientele3 })), props: clientele },
          { importFunc: () => import('@/blocks/pricing').then((module) => ({ default: module.Pricing9 })), props: newPricing }
        ]}
        offset="200px"
      />

      <LazySection
        sections={[
          { importFunc: () => import('@/blocks/cta').then((module) => ({ default: module.Cta5 })), props: cta5 },
          { importFunc: () => import('@/blocks/faq').then((module) => ({ default: module.Faq6 })), props: faq }
        ]}
        offset="200px"
      />
    </>
  );
}
