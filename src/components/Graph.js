import { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import {db} from '@/server/firebase';

export default function Graph({path,name}) {
  const canvasRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Initialize Firebase app and database
    // ...

    // Listen for temperature data changes in Firebase
    const temperatureRef=db.ref(path);
    temperatureRef.on('value',(snapshot)=>{
        const temperature = snapshot.val()
        if (!chart) {
            const initialChart = new Chart(ctx, {
              type: 'line',
              data: {
                labels: [],
                datasets: [
                  {
                    label: name,
                    data: [],
                    backgroundColor: '#ff4d00',
                    borderColor: '#000000',
                    borderWidth: 1,
                  },
                ],
              },
              options: {
                scales: {
                  xAxes: [
                    {
                      type: 'time',
                      time: {
                        displayFormats: {
                          second: 'ss',
                        },
                      },
                    },
                  ],
                },
              },
            });
      
            setChart(initialChart);
          } else {
            chart.data.labels.push(new Date().getUTCSeconds());
            chart.data.datasets[0].data.push(temperature);
            chart.update();
          }
      
    })
    // ...

    // Create or update the chart
    
    // Clean up
    return () => {
      temperatureRef.off();
      if (chart) {
        chart.destroy();
      }
    };
  }, [chart]);
 
  

  return (
  
  <div  >
    
    <canvas ref={canvasRef} /></div>);
}