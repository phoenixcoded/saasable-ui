import dynamic from 'next/dynamic';

// @project
import { PAGE_PATH } from '@/path';
import { SEO_CONTENT } from '@/metadata';

const OtpVerification = dynamic(() => import('@/views/sections/OtpVerification'));

/***************************  METADATA - OTP VERIFICATION  ***************************/

export const metadata = {
  ...SEO_CONTENT.otpVerification,
  openGraph: { ...SEO_CONTENT.otpVerification, url: PAGE_PATH.otpVerification }
};

/***************************  PAGE - OTP VERIFICATION  ***************************/

export default function OtpVerificationPage() {
  return <OtpVerification />;
}
