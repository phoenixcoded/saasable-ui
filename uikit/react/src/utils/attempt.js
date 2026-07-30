export async function attempt(promise) {
  try {
    const data = await promise;
    return { data, error: null };
  } catch (err) {
    if (typeof err === 'string') return { data: null, error: err };

    const error = err;

    let detail;
    if (typeof error.detail === 'string') {
      detail = error.detail;
    } else if (Array.isArray(error.detail)) {
      detail =
        error.detail
          .map((d) => d?.msg)
          .filter(Boolean)
          .join(', ') || undefined;
    }

    return {
      data: null,
      error: error.message || detail || 'Something went wrong',
      status: error.status
    };
  }
}
