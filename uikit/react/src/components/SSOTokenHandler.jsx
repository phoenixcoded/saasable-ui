'use client';
import PropTypes from 'prop-types';

import { Suspense, useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// @project
import { AUTH_USER_KEY } from '@/config';
import Loader from '@/components/Loader';
import { ssoLogin } from '@/utils/api/auth';

/***************************  SSO - TOKEN HANDLER  ***************************/

function SSOTokenHandlerInner({ children }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const token = searchParams.get('token');
  const email = searchParams.get('email');
  const license = searchParams.get('license');

  const [isValidating, setIsValidating] = useState(Boolean(token));
  const hasExchangedRef = useRef(false);

  useEffect(() => {
    if (!token || hasExchangedRef.current) {
      return;
    }

    hasExchangedRef.current = true;
    setIsValidating(true);

    (async () => {
      const { data, error } = await ssoLogin({
        token,
        email: email || undefined,
        license: license || undefined
      });

      if (error || !data?.access_token) {
        setIsValidating(false);
        return;
      }

      localStorage.setItem(
        AUTH_USER_KEY,
        JSON.stringify({
          access_token: data.access_token,
          email: data.email || email || '',
          license: data.license || license || '',
          workspace_id: data.workspace_id || ''
        })
      );

      const event = new StorageEvent('storage', {
        key: AUTH_USER_KEY,
        newValue: localStorage.getItem(AUTH_USER_KEY),
        storageArea: localStorage
      });
      window.dispatchEvent(event);

      router.replace(pathname);
      setIsValidating(false);
    })();
  }, [token, email, license, router, pathname]);

  if (isValidating) {
    return <Loader />;
  }

  return <>{children}</>;
}

export default function SSOTokenHandler({ children }) {
  return (
    <Suspense fallback={<Loader />}>
      <SSOTokenHandlerInner>{children}</SSOTokenHandlerInner>
    </Suspense>
  );
}

SSOTokenHandlerInner.propTypes = { children: PropTypes.node };

SSOTokenHandler.propTypes = { children: PropTypes.node };
