import React from 'react'
import Image from "next/image";

function FalseResponse(data:any) {
  return (
    <div>
        <Image
            className=""
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
        />

        <div> You do not have any {data} data yet</div>
    </div>
  )
}

export default FalseResponse