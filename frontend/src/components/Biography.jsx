import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.
          </p>
          <p>We are all in 2024!</p>
          <p>
          To better serve the wide-ranging needs of the community, the modern hospital has often developed outpatient facilities, as well as emergency, psychiatric, and rehabilitation services. In addition, “bedless hospitals” provide strictly ambulatory (outpatient) care and day surgery. Patients arrive at the facility for short appointments. They may also stay for treatment in surgical or medical units for part of a day or for a full day, after which they are discharged for follow-up by a primary care health provider.
          </p>
          <p>A doctor is not just a healer but a source of hope and comfort for those in pain.</p>
  
        </div>
      </div>
    </>
  );
};

export default Biography;