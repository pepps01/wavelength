import React from 'react'
import ControlButton from './ControlButton'

type ControlListProps ={
    data:any;
}

const ControlButtonList =(data:ControlListProps[]) =>{
  return (
        <div>
            Ok
        </div>

        // data.map((item, _index) =>(
        //     <ControlButton key={_index} title={item.title} buttonName={item.buttonName} buttonImage={item.buttonImage}/>
        // ))
  )
}

export default ControlButtonList