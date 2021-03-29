import React from 'react'

import { MapContainer, TileLayer} from 'react-leaflet'

// import {useMapEvents} from 'react-leaflet';
// import Locate from "leaflet.locatecontrol";



// import {LatLngExpression} from 'leaflet'
const Carte = (props) => {
    // const defaultPosition = {lat: props.lat, lng:props.lon};
    // const lc = new Locate(defaultPosition);
    // lc.addTo()
    // console.log(coordonnes.lat);

    // function LocationMarker() {
    //     const [position, setPosition] = useState(null)
    //     const map = useMapEvent({
    //       click() {
    //         map.locate()
    //       },
    //       locationfound(e) {
    //         setPosition(defaultPosition)
    //         map.flyTo(defaultPosition, map.getZoom())
    //         console.log(e.latlng);
    //       },
    //     })
      
    //     return position === null ? null : (
    //       <Marker position={position}>
    //         <Popup>You are here</Popup>
    //       </Marker>
    //     )
    //   }

  
  // function MyComponent() {
  //     const map = useMapEvent("onchange", () => {
  //       map.setView(defaultPosition)
  //     })
  //     return null
  //   }
  // function LocationMarker() {
  //   const [position, setPosition] = useState(null)
  //   const map = useMapEvents({
  //     locationfound() {
  //         map.locate()
  //       },
  //     locationfound() {
  //       setPosition(defaultPosition)
  //       console.log(defaultPosition);
  //       map.flyTo(defaultPosition, map.getZoom())
  //     },
  //   })
  
  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   )
  // }


  // baselayerchange?: LayersControlEventHandlerFn;
  // overlayadd?: LayersControlEventHandlerFn;
  // overlayremove?: LayersControlEventHandlerFn;

  // layeradd?: LayerEventHandlerFn;
  // layerremove?: LayerEventHandlerFn;

  // zoomlevelschange?: LeafletEventHandlerFn;
  // unload?: LeafletEventHandlerFn;
  // viewreset?: LeafletEventHandlerFn;
  // load?: LeafletEventHandlerFn;
  // zoomstart?: LeafletEventHandlerFn;
  // movestart?: LeafletEventHandlerFn;
  // zoom?: LeafletEventHandlerFn;
  // move?: LeafletEventHandlerFn;
  // zoomend?: LeafletEventHandlerFn;
  // moveend?: LeafletEventHandlerFn;
  // autopanstart?: LeafletEventHandlerFn;
  // dragstart?: LeafletEventHandlerFn;
  // drag?: LeafletEventHandlerFn;
  // add?: LeafletEventHandlerFn;
  // remove?: LeafletEventHandlerFn;
  // loading?: LeafletEventHandlerFn;
  // error?: LeafletEventHandlerFn;
  // update?: LeafletEventHandlerFn;
  // down?: LeafletEventHandlerFn;
  // predrag?: LeafletEventHandlerFn;

  // resize?: ResizeEventHandlerFn;

  // popupopen?: PopupEventHandlerFn;
  // popupclose?: PopupEventHandlerFn;

  // tooltipopen?: TooltipEventHandlerFn;
  // tooltipclose?: TooltipEventHandlerFn;

  // locationerror?: ErrorEventHandlerFn;

  // locationfound?: LocationEventHandlerFn;

  // click?: LeafletMouseEventHandlerFn;
  // dblclick?: LeafletMouseEventHandlerFn;
  // mousedown?: LeafletMouseEventHandlerFn;
  // mouseup?: LeafletMouseEventHandlerFn;
  // mouseover?: LeafletMouseEventHandlerFn;
  // mouseout?: LeafletMouseEventHandlerFn;
  // mousemove?: LeafletMouseEventHandlerFn;
  // contextmenu?: LeafletMouseEventHandlerFn;
  // preclick?: LeafletMouseEventHandlerFn;

  // keypress?: LeafletKeyboardEventHandlerFn;
  // keydown?: LeafletKeyboardEventHandlerFn;
  // keyup?: LeafletKeyboardEventHandlerFn;

  // zoomanim?: ZoomAnimEventHandlerFn;

  // dragend?: DragEndEventHandlerFn;

  // tileunload?: TileEventHandlerFn;
  // tileloadstart?: TileEventHandlerFn;
  // tileload?: TileEventHandlerFn;

  // tileerror?: TileErrorEventHandlerFn;



    return(
        <div id='mapid'>
            <MapContainer style={{ width: "50vw", height: "50vh" }} center={{lat:42,lng:42}} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
  {/* <TestMapComponent/> */}
  {/* <MyComponent/> */}
            </MapContainer>
        </div>
    )
};

export default Carte
