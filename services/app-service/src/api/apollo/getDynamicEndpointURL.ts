export const getDynamicEndpointURL = () => {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_ENDPOINT_URL;
  }

  const url = new URL(window.location.href);

  url.port = '3001';
  url.search = '';

  return url.origin;
};
