'use client';

import { useEffect } from 'react';

// @next
import { useRouter } from 'next/navigation';

// @project
import { APP_DEFAULT_PATH } from '@/config';

/***************************  MAIN - DEFAULT PAGE  ***************************/

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace(APP_DEFAULT_PATH);
  }, [router]);
}
