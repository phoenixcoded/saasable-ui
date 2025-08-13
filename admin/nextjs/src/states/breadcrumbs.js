import { useEffect, useMemo } from 'react';

// @next
import { usePathname } from 'next/navigation';

// @third-party
import useSWR, { mutate } from 'swr';

const initialState = {
  activePath: '',
  data: []
};

export const endpoints = {
  key: 'api/breadcrumbs',
  master: 'master'
};

export function useGetBreadcrumbsMaster() {
  // to fetch initial state based on endpoints

  const { data, isLoading } = useSWR(endpoints.key + endpoints.master, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  // reset cache if currentPath doesn't match activePath
  const currentPath = usePathname();
  useEffect(() => {
    if (data && data.activePath !== currentPath) {
      mutate(endpoints.key + endpoints.master, initialState, false);
    }
  }, [currentPath, data]);

  const memoizedValue = useMemo(
    () => ({
      breadcrumbsMaster: data,
      breadcrumbsMasterLoading: isLoading
    }),
    [data, isLoading]
  );

  return memoizedValue;
}

export function handlerBreadcrumbs(activePath, data) {
  // to update `openedItem` local state based on key

  mutate(
    endpoints.key + endpoints.master,
    (currentBreadcrumbsMaster = initialState) => {
      return { ...currentBreadcrumbsMaster, activePath, data };
    },
    false
  );
}
