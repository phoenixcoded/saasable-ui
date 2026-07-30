import { useState, useEffect } from 'react';

// @project
import { BUY_NOW_URL as STATIC_BUY_NOW_URL } from '@/path';

export default function useBuyNowUrl() {
  const [url, setUrl] = useState(STATIC_BUY_NOW_URL);

  useEffect(() => {
    const C_URL = 'https://codedthemes.com/item/saasable-mui-react-ui-kit-and-landings';
    const MUI_URL = 'https://mui.com/store/items/saasable-multipurpose-ui-kit-and-dashboard-template';

    let targetUrl = C_URL;

    if (typeof window !== 'undefined') {
      const referrer = document.referrer ? document.referrer.toLowerCase() : '';
      let isMui = false;
      if (referrer.includes('mui.com')) {
        isMui = true;
      }
      if (isMui) {
        targetUrl = MUI_URL;
      } else {
        targetUrl = C_URL;
      }
    }

    setUrl(targetUrl);
  }, []);

  return url;
}
