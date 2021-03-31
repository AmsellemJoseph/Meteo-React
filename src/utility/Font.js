import React,{useEffect} from 'react'
import WebFont from 'webfontloader';

const Font = ()=>{

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Varela Round']
          }
        });
       }, []);

    return(
        <div>

        </div>
    )
}

export default Font