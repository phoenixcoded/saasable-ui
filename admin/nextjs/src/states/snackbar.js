import { useMemo } from 'react';

// @third-party
import useSWR, { mutate } from 'swr';

const endpoints = {
  key: 'snackbar'
};

const initialState = {
  action: false,
  open: false,
  message: 'Note archived',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  },
  severity: 'success',
  variant: 'default',
  alert: {
    variant: 'filled'
  },
  transition: 'Zoom',
  close: false,
  actionButton: false,
  maxStack: 3,
  dense: false,
  iconVariant: 'useemojis',
  hideIconVariant: false
};

export function useGetSnackbar() {
  const { data } = useSWR(endpoints.key, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(() => ({ snackbar: data }), [data]);

  return memoizedValue;
}

export function openSnackbar(snackbar) {
  // to update local state based on key

  const { action, open, message, anchorOrigin, variant, alert, transition, close, actionButton, severity } = snackbar;

  mutate(
    endpoints.key,
    (currentSnackbar) => {
      const safeSnackbar = currentSnackbar || initialState;
      return {
        ...safeSnackbar,
        action: action || initialState.action,
        open: open || initialState.open,
        message: message || initialState.message,
        anchorOrigin: anchorOrigin || initialState.anchorOrigin,
        variant: variant || initialState.variant,
        alert: { variant: alert?.variant || initialState.alert.variant },
        severity: severity || initialState.severity,
        transition: transition || initialState.transition,
        close: close || initialState.close,
        actionButton: actionButton || initialState.actionButton
      };
    },
    false
  );
}

export function closeSnackbar() {
  // to update local state based on key
  mutate(
    endpoints.key,
    (currentSnackbar) => {
      const safeSnackbar = currentSnackbar || initialState;
      return { ...safeSnackbar, open: false };
    },
    false
  );
}

export function handlerIncrease(maxStack) {
  // to update local state based on key
  mutate(
    endpoints.key,
    (currentSnackbar) => {
      const safeSnackbar = currentSnackbar || initialState;
      return { ...safeSnackbar, maxStack };
    },
    false
  );
}

export function handlerDense(dense) {
  // to update local state based on key
  mutate(
    endpoints.key,
    (currentSnackbar) => {
      const safeSnackbar = currentSnackbar || initialState;
      return { ...safeSnackbar, dense };
    },
    false
  );
}

export function handlerIconVariants(iconVariant) {
  // to update local state based on key
  mutate(
    endpoints.key,
    (currentSnackbar) => {
      const safeSnackbar = currentSnackbar || initialState;
      return { ...safeSnackbar, iconVariant, hideIconVariant: iconVariant === 'hide' };
    },
    false
  );
}
