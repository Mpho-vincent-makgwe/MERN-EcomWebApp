import React from "react";
import Image from "next/image";

const IndexCard = ({data})=>{
    return(
        <div>
            <div className="w-100 h-100">
                <Image src={data.image} alt={data.title} height={40} width={40} />
            </div>
            <h1>{data.title}</h1>

        </div>
    )
}
export default IndexCard;