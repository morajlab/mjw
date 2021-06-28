import svgToDataurl from 'svg-to-dataurl';
import syncFetch from 'sync-fetch';

export const svgToBase64FromURL = (url: string): string => {
  const response = syncFetch(url);

  return svgToDataurl(response.text());
};
