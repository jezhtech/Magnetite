import React from 'react';

function Gps({ gpslat, gpslon }) {
  console.log(gpslat, gpslon);

  // Store the GPS latitude and longitude values in variables
  const latitude = parseFloat(gpslat); // Parse as float if needed
  const longitude = parseFloat(gpslon);

  // Replace 'YOUR_BING_MAPS_API_KEY' with your actual Bing Maps API key
  const apiKey = 'Ar0WsXAwjUqkXikBXwB7uD1Wk602djHhKrvdcATkc2_2TDNEdRPIUA2H4QkQ-kCf';

  return (
    <>

    <div className="ratio ratio-1x1 text-center">
      <iframe className="border rounded-3 my-3 px-auto"
       width="470px"
       height="470px"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src={`https://www.bing.com/maps/embed?h=775&w=775&cp=${latitude}~${longitude}&lvl=12&typ=d&sty=r&src=SHELL&FORM=MBEDV8`}
        allowfullscreen
      >
        
      </iframe>
     
    </div>
    <p>{latitude},{longitude}</p></>
  );
}

export default Gps;
