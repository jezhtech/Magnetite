import React,{useState,useEffect} from 'react'
import {db} from '../server/firebase';


function Data({path,unit}) {
  const [State, setState] = useState();

  useEffect(() => {
    
    db.ref().child(path).on('value',(snapshot)=>{
      const Tdata = snapshot.val()
      setState(Tdata)
    });

  
    
  }, [path])
  
  
  return (
    <div >
        
          
          <div >{State}{unit}</div>
     
      
      </div>
    
    
  )
}

export default Data