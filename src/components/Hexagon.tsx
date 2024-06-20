
import { useState } from 'react'

type HexagonProps = {
    title:string
}

export default function Hexagon ({title}:HexagonProps) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="hex-alt text-center font-extrabold text-xs content-center bg-gray-300 transition-all duration-300 ease-in-out hover:scale-105"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>


          {isHovered ? '' : title}
      </div>
    </>
  )
}