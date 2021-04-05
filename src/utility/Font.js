import React, { useEffect } from 'react'
import WebFont from 'webfontloader';

const Font = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Varela Round', 'Nunito', 'Merriweather']
      }
    });
  }, []);

  return (
    <div>

    </div>
  )
}

export default Font