import React, { useState } from "react";
import { FaStar } from "react-icons/fa";


const Star = ({selected=false, onSelect = f => f
} ) => (
<FaStar color={selected ? "red" : "grey" } onClick={onSelect} />
);

export default function StarRating({ style, totalStars = 5, ...props}) {

    const [selectedStars, setSelectedStars] = useState(2);

    const createArray = (length) => [...Array(length)];

    return (
      <div style={ {padding: "5px", ...style}} {...props} >
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => {
            setSelectedStars(i+1); 
            console.log("Star is clicked!")
          }}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
      </div>
        
      
    );
  }