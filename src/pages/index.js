import React from "react";
import { useEffect, useState } from "react";
import { db } from "../server/firebase";
import Airquality from "@/components/airquality";
import bodytemp from "@/components/bodytemp";
import ammonia from "@/components/ammonia";
import AtmosHum from "@/components/data";
import Gps from "@/components/gps";
import co from "@/components/co";
import spo2 from "@/components/spo2";
import heartrate from "@/components/heartrate";
import methane from "@/components/methane";
import co2 from "@/components/co2";
import atmostemp from "@/components/atmostemp";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Graph from "@/components/Graph";
import Data from "@/components/data";
import ProgressBar from "@ramonak/react-progress-bar";
import dynamic from "next/dynamic";
import { CircularGauge } from "@progress/kendo-react-gauges";
const GaugeComponent = dynamic(() => import("react-gauge-component"), {
  ssr: false,
});

function Home() {
  const [aq, setaq] = useState("");
  const [ammonia, setammonia] = useState("");
  const [Humidity, setHumidity] = useState("");
  const [atmostemp, setatmostemp] = useState("");
  const [Temperature, setTemperature] = useState("");
  const [co, setco] = useState("");
  const [co2, setco2] = useState("");
  const [gpslat, setgpslat] = useState("");
  const [gpslon, setgpslon] = useState("");
  const [pulse, setpulse] = useState("");
  const [methane, setmethane] = useState("");
  const [SPo2, setSPo2] = useState("");

  const colors = [
    {
      from:0,
      to: 1000,
      color: "#00FF00",
    },
   
  ];

  const arcOptions = {
    value: SPo2,
    colors,
  };

  useEffect(() => {
    const aqRef = db.ref("JZHHM0001/AirQuality/value");
    aqRef.on("value", (snapshot) => {
      const aq = snapshot.val();
      setaq(aq);
    });
    const ammoniaRef = db.ref("JZHHM0001/Amonia/value");
    ammoniaRef.on("value", (snapshot) => {
      const ammonia = snapshot.val();
      setammonia(ammonia);
    });

    const HumidityRef = db.ref("JZHHM0001/Humidity/value");
    HumidityRef.on("value", (snapshot) => {
      const Humidity = snapshot.val();
      setHumidity(Humidity);
    });

    const atmostempRef = db.ref("JZHHM0001/Temperature/value");
    atmostempRef.on("value", (snapshot) => {
      const atmostemp = snapshot.val();
      setatmostemp(atmostemp);
    });

    const temperatureRef = db.ref("JZHHM0001/BodyTem/value");
    temperatureRef.on("value", (snapshot) => {
      const temperature = snapshot.val();
      setTemperature(temperature);
    });

    const coRef = db.ref("JZHHM0001/CarbonMonoOxide/value");
    coRef.on("value", (snapshot) => {
      const co = snapshot.val();
      setco(co);
    });
    const co2Ref = db.ref("JZHHM0001/CarbonDiOxide/value");
    co2Ref.on("value", (snapshot) => {
      const co2 = snapshot.val();
      setco2(co2);
    });

    const gpslatRef = db.ref("JZHHM0001/GPSLat/value");
    gpslatRef.on("value", (snapshot) => {
      const gpslat = snapshot.val();
      setgpslat(gpslat);
    });
    const gpslonRef = db.ref("JZHHM0001/GPSLon/value");
    gpslonRef.on("value", (snapshot) => {
      const gpslon = snapshot.val();
      setgpslon(gpslon);
    });

    const pulseRef = db.ref("JZHHM0001/Pulse/value");
    pulseRef.on("value", (snapshot) => {
      const pulse = snapshot.val();
      setpulse(pulse);
    });

    const methaneRef = db.ref("JZHHM0001/Methane/value");
    methaneRef.on("value", (snapshot) => {
      const methane = snapshot.val();
      setmethane(methane);
    });

    const SPo2Ref = db.ref("JZHHM0001/SPO2/value");
    SPo2Ref.on("value", (snapshot) => {
      const SPo2 = snapshot.val();
      setSPo2(SPo2);
    });
  });
  const centerRenderer = () => {
    return (
      <h3
        style={{
          color: "#000",
        }}
      >
        {SPo2}%
      </h3>
    );
  };
  return (
    <html>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <div>
          <div className="container-fluid ">
            <div className="row">
              <div
                className="col-2 p-0 bg-body-tertiary border-end"
                style={{ height: "100vh" }}
              >
                <Sidebar />
              </div>

              <div className="col-10 p-0" style={{ height: "100vh" }}>
                <div class="container-fluid ">
                  <div class="row">
                    <div class="col-6">
                      {gpslat && gpslon && (
                        <Gps gpslat={gpslat} gpslon={gpslon} />
                      )}
                    </div>
                    <div class="col-6 py-3">
                      <div class="container-fluid ">
                        <div class="row g-2">
                          <div class="col-6">
                            <div class="bg-light rounded-3 border pt-4 pb-3">
                              <div class="container-fluid text-center">
                                <div class="row ">
                                  <span className="font-monospace ">
                                    Temperature
                                  </span>
                                  <div class="col-0"></div>
                                  <div class="col-12">
                                    <GaugeComponent
                                      type="semicircle"
                                      arc={{
                                        width: 0.2,
                                        padding: 0.005,
                                        cornerRadius: 1,
                                        // gradient: true,
                                        subArcs: [
                                          {
                                            limit: 50,
                                            color: "#00e400",
                                            showTick: true,
                                            tooltip: {
                                              text: "Good",
                                            },
                                            onClick: () =>
                                              console.log(
                                                "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
                                              ),
                                            onMouseMove: () =>
                                              console.log(
                                                "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                                              ),
                                            onMouseLeave: () =>
                                              console.log(
                                                "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"
                                              ),
                                          },
                                          {
                                            limit: 100,
                                            color: "#ffff00",
                                            showTick: true,
                                            tooltip: {
                                              text: "Moderate",
                                            },
                                          },
                                          {
                                            limit: 150,
                                            color: "#ff7e00",
                                            showTick: true,
                                            tooltip: {
                                              text: "slightly unhealthy",
                                            },
                                          },
                                          {
                                            limit: 200,
                                            color: "#ff0000",
                                            showTick: true,
                                            tooltip: {
                                              text: "very unhealthy",
                                            },
                                          },
                                          {
                                            limit: 300,
                                            color: "#99004c",
                                            showTick: true,
                                            tooltip: {
                                              text: "Hazardous 1",
                                            },
                                          },
                                          {
                                            limit: 400,
                                            color: "#7e0023",
                                            showTick: true,
                                            tooltip: {
                                              text: "Hazardous 2",
                                            },
                                          },
                                        ],
                                      }}
                                      pointer={{
                                        color: "#adb5bd",
                                        length: 0.8,
                                        width: 15,
                                        // elastic: true,
                                      }}
                                      labels={{
                                        valueLabel: {
                                          formatTextValue: (value) =>
                                            value + "aqi",
                                        },
                                        tickLabels: {
                                          type: "outer",
                                          valueConfig: {
                                            formatTextValue: (value) =>
                                              value + "aqi",
                                            fontSize: 10,
                                          },
                                          ticks: [
                                            { value: 50 },
                                            { value: 100 },
                                            { value: 150 },
                                            { value: 200 },
                                            { value: 300 },

                                            { value: 500 },
                                          ],
                                        },
                                      }}
                                      value={aq}
                                      minValue={0}
                                      maxValue={500}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class=" bg-light rounded-3 p-3 border ">
                              <div class="container-fluid text-center ">
                                <div class="row">
                                  <span className="font-monospace ">
                                    Humidity
                                  </span>

                                  <div class="col-0"></div>
                                  <div class="col-12">
                                    <GaugeComponent
                                      arc={{
                                        subArcs: [
                                          {
                                            limit: 20,
                                            color: "#0d6efd",
                                            showTick: true,
                                          },
                                          {
                                            limit: 40,
                                            color: "#0d6efd",
                                            showTick: true,
                                          },
                                          {
                                            limit: 60,
                                            color: "#0d6efd",
                                            showTick: true,
                                          },
                                          {
                                            limit: 100,
                                            color: "#0d6efd",
                                            showTick: true,
                                          },
                                        ],
                                      }}
                                      value={Humidity}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-6">
                            <div class="p-3 bg-light rounded-3  border ">
                              <div class="container-fluid text-center ">
                                <span className="font-monospace ">
                                  Atmospheric Temperature
                                </span>

                                <div class="row">
                                  <div class="col-1">
                                    <div className="p-4 rounded-circle bg-danger position-relative"></div>
                                  </div>
                                  <div
                                    class="col-11"
                                    style={{ paddingTop: "0.8rem" }}
                                  >
                                    <ProgressBar
                                      class="position-absolute top-50 start-100 translate-middle"
                                      completed={atmostemp || 0}
                                      customLabel=" "
                                      bgColor="#dc3545"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="p-3 bg-light rounded-3 mt-2 border ">
                              <div class="container-fluid text-center ">
                                <span className="font-monospace ">
                                  Body Temperature
                                </span>

                                <div class="row">
                                  <div class="col-1">
                                    <div className="p-4 rounded-circle bg-danger position-relative"></div>
                                  </div>
                                  <div
                                    class="col-11"
                                    style={{ paddingTop: "0.8rem" }}
                                  >
                                    <ProgressBar
                                      class="position-absolute top-50 start-100 translate-middle"
                                      completed={Temperature || 0}
                                      customLabel=" "
                                      bgColor="#dc3545"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="p-3 bg-light rounded-3 p-3 border ">
                              <div class="container ">
                                <div class="row">
                                  <div class="col-1">
                                    <h1 class="display-6 fw-bolder">
                                      {/* {pulse&&<pulse pulse={pulse}/>} */}
                                    </h1>
                                  </div>
                                  <div class="col-11">
                                    <Graph
                                      path={"JZHHM0001/Pulse/value"}
                                      name={"Pulse"}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="container  py-2">
                        <div class="row g-2">

                          <div class="col-6">
                            {/* <div class="p-3 bg-light rounded-3 p-3 border ">
                              <div class="container-fluid text-center ">
                                <div class="row">
                                  <h1 class="display-6 fw-bolder font-monospace">
                                    SpO<sub>2</sub>
                                    <span class="mx-2">≈</span>
                                    {SPo2}%
                                  </h1>
                                </div>
                              </div>
                            </div> */}
                             <CircularGauge {...arcOptions} centerRender={centerRenderer} />;
                          </div>
                        </div>
                      </div>

                      <div class="container ">
                        <div class="row g-2">
                          <div class="col-6">
                            <div class="p-3 bg-light rounded-3 border">
                              <div class="d-flex">
                                <h5 class="font-monospace ">CO </h5>
                                <span
                                  class={`badge px-2 mx-2 rounded-pill text-light h6 bg-${
                                    co/10000 > 5 ? "danger" : "success"
                                  }`}
                                >
                                  {co/10000}%
                                </span>
                              </div>

                              <ProgressBar
                                completed={co/10000 || 0}
                                customLabel=" "
                                bgColor={`${co/10000 > 5 ? "#ff0000" : "#198754"}`}
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="p-3 bg-light rounded-3 border">
                              <div class="d-flex">
                                <h5 class="font-monospace ">Ammonia</h5>
                                <span
                                  class={`badge px-2 mx-2 rounded-pill text-light h6 bg-${
                                    ammonia/10000 > 5 ? "danger" : "success"
                                  }`}
                                >
                                  {ammonia/10000}%
                                </span>
                              </div>

                              <ProgressBar
                                completed={ammonia/10000 || 0}
                                customLabel=" "
                                bgColor={`${
                                  ammonia/10000 > 5 ? "#ff0000" : "#198754"
                                }`}
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="p-3 bg-light rounded-3 border">
                              <div class="d-flex">
                                <h5 class="font-monospace ">Methane </h5>
                                <span
                                  class={`badge px-2 mx-2 rounded-pill text-light h6 bg-${
                                    methane/10000 > 5 ? "danger" : "success"
                                  }`}
                                >
                                  {methane/10000}%
                                </span>
                              </div>

                              <ProgressBar
                                completed={methane/10000 || 0}
                                customLabel=" "
                                bgColor={`${
                                  methane/10000 > 5 ? "#ff0000" : "#198754"
                                }`}
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="p-3 bg-light rounded-3 border">
                              <div class="d-flex">
                                <h5 class="font-monospace ">
                                  CO<sub>2</sub>
                                </h5>
                                <span
                                  class={`badge px-2 mx-2 rounded-pill text-light h6 bg-${
                                    co2/10000 > 5 ? "danger" : "success"
                                  }`}
                                >
                                  {co2/10000}%
                                </span>
                              </div>

                              <ProgressBar
                                completed={co2/10000 || 0}
                                customLabel=" "
                                bgColor={`${co2/10000 > 5 ? "#ff0000" : "#198754"}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 
        {aq&&<Airquality aqi={aq}/>}
   {ammonia&&<ammonia ammonia={ammonia}/>}
   {atmostemp&&<atmostemp atmostemp={atmostemp}/>}
   {Humidity&&<atmoshum atmoshum={Humidity}/>}
   {Temperature&&<bodytemp bodytemp={Temperature}/> }
   {co&&<co co={co}/>}
   {co2&&<co2 co2={co2}/>}
   {pulse&&<pulse pulse={pulse}/>}
   {methane&&<methane methane={methane}/>}
   {SPo2&&<sp02 spo2={SPo2}/>} */}
                  </div>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>

        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}

export default Home;
