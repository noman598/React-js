import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {/* We are just going to replace the date only not tags and properties */}
          
          {props.emoji} 
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>
        {props.meaning}
      </dd>
    </div>
  );
}

export default Entry;
