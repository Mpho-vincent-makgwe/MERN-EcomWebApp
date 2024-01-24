import React from "react";
import Image from "next/image";

const IndexCard = ({data})=>{
    return(
        <div>
            <Image src={data.image} alt={data.title} height={40} width={40} />
            <h1>{data.title}</h1>

        </div>
    )
}
export default IndexCard;