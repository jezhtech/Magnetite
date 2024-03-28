import React from 'react'
import { useEffect,useState } from 'react'
import {db} from "../server/firebase"
import Airquality from '@/components/airquality'
import bodytemp from '@/components/bodytemp'
import ammonia from '@/components/ammonia'
import atmoshum from '@/components/atmoshum'
import Gps from '@/components/gps'
import co from '@/components/co'
import spo2 from '@/components/spo2'
import heartrate from '@/components/heartrate'
import methane from '@/components/methane'
import co2 from '@/components/co2'
import atmostemp from '@/components/atmostemp'

function Home() {

  const [aq, setaq] = useState(null);
  const [ammonia, setammonia] = useState(null);
  const [Humidity, setHumidity] = useState(null);
  const [atmostemp, setatmostemp] = useState(null);
  const [Temperature, setTemperature] = useState(null);
  const [co, setco] = useState(null);
  const [co2, setco2] = useState(null);
  const [gpslat, setgpslat] = useState(null);
  const [gpslon, setgpslon] = useState(null);
  const [pulse, setpulse] = useState(null);
  const [methane, setmethane] = useState(null);
  const [SPo2, setSPo2] = useState(null);

  useEffect(() => {
    const aqRef = db.ref("JZHHM0001/AirQuality/value");
    aqRef.on('value',(snapshot) => {
    const aq = snapshot.val()
    setaq(aq)
   }

   
   )
   const ammoniaRef = db.ref("JZHHM0001/Amonia/value");
   ammoniaRef.on('value',(snapshot) => {
   const ammonia = snapshot.val()
   setammonia(ammonia)
  }
  )

  const HumidityRef = db.ref("JZHHM0001/Humidity/value");
  HumidityRef.on('value',(snapshot) => {
  const Humidity = snapshot.val()
  setHumidity(Humidity)
 }
 )

 const atmostempRef = db.ref("JZHHM0001/Temperature/value");
 atmostempRef.on('value',(snapshot) => {
 const atmostemp = snapshot.val()
 setatmostemp(atmostemp)
}
)


const temperatureRef = db.ref("JZHHM0001/BodyTem/value");
temperatureRef.on('value',(snapshot) => {
const temperature = snapshot.val()
setTemperature(temperature)
}
)

const coRef = db.ref("JZHHM0001/CarbonMonoOxide/value");
    coRef.on('value',(snapshot) => {
    const co = snapshot.val()
    setco(co)
   }
   )
   const co2Ref = db.ref("JZHHM0001/CarbondiOxide/value");
   co2Ref.on('value',(snapshot) => {
   const co2 = snapshot.val()
   setco2(co2)
  }
  )

  const gpslatRef = db.ref("JZHHM0001/GpsLat/value");
  gpslatRef.on('value',(snapshot) => {
  const gpslat = snapshot.val()
  setgpslat(gpslat)
 }
  )
  const gpslonRef = db.ref("JZHHM0001/GpsLon/value");
  gpslonRef.on('value',(snapshot) => {
  const gpslon = snapshot.val()
  setgpslon(gpslon)
 }
 )

 const pulseRef = db.ref("JZHHM0001/Pulse/value");
 pulseRef.on('value',(snapshot) => {
 const pulse = snapshot.val()
 setpulse(pulse)
}
)


const methaneRef = db.ref("JZHHM0001/Methane/value");
methaneRef.on('value',(snapshot) => {
const methane = snapshot.val()
setmethane(methane)
}
)

const SPo2Ref = db.ref("JZHHM0001/SPO2/value");
SPo2Ref.on('value',(snapshot) => {
const SPo2 = snapshot.val()
setSPo2(SPo2)
}
)








  })
  console.log(aq)
  return (
    <div>
   {aq&&<Airquality aqi={aq}/>}
   {ammonia&&<ammonia ammonia={ammonia}/>}
   {atmostemp&&<atmostemp atmostemp={atmostemp}/>}
   {Humidity&&<atmoshum atmoshum={Humidity}/>}
   {Temperature&&<bodytemp bodytemp={Temperature}/> }
   {co&&<co co={co}/>}
   {co2&&<co2 co2={co2}/>}
   {pulse&&<pulse pulse={pulse}/>}
   {methane&&<methane methane={methane}/>}
   {SPo2&&<sp02 spo2={SPo2}/>}

   </div>
    
  )
}

export default Home