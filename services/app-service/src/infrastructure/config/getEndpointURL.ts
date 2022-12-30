export const getEndpointURL = () => {
  if (typeof window === 'undefined' || !('location' in window)) {
    return (
      process.env.INTERNAL_ENDPOINT_URL ?? process.env.NEXT_PUBLIC_ENDPOINT_URL
    );
  }

  const url = new URL(window.location.href);

  url.port = '3001';
  url.search = '';

  return url.origin;
};
