import { useEffect, useState } from "react";

function Events() {
  const [allEvent, setAllEvent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setAllEvent(resp);
        console.log(resp, ">>>>>>>")
        return resp;
      })
      .catch((err) => {
        console.log(`Something Went Wrong`, `${err.message}`);
      });
  }, []);

  return (
    <div>
      <div className="offset-lg-1 col-lg-10 my-1">
        <div className="container">
          <div className="card ">
            <div className="card-header bs-success-bg-subtle">
              <h1>All Events</h1>
            </div>
          </div>
        </div>
      </div>
      {allEvent.map((dataObj) => {
        console.log("Hello", dataObj);
        <div className="offset-lg-1 col-lg-10 my-1">
          <div className="container">
            <div className="card ">
              <div className="card-header bs-success-bg-subtle">
                <h1><b>Name of the Event: {dataObj.eventName}</b></h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <p><b>Organizer: {dataObj.eventOrganizer} </b></p>
                  </div>
                  <div className="col-lg-6">
                    <p><b>Event Type: {dataObj.eventType}</b></p>
                  </div>
                  <div className="col-lg-6">
                    <p><b>Event Speaker Details: {dataObj.eventSpeakerDetails}</b></p>
                  </div>
                  <div className="col-lg-6">
                    <p><b>Event Location & Address: {dataObj.eventLocationAddress} </b></p>
                  </div>
                  <div className="col-lg-6">
                    <p><b>Event Date: {dataObj.eventDate} </b></p>
                  </div>
                  <div className="col-lg-6">
                    <p><b>Event Time: {dataObj.eventTime}</b></p>
                  </div>
                  <div className="col-lg-6">
                    <p><b>Event Details: {dataObj.eventDescription}</b></p>
                  </div>
                  <div className="col-lg-6">
                    <p><b>Organizer Details: {dataObj.eventOrganizerDetails}</b></p>
                  </div>
                  <div className="card-footer ">
                  <div className="row">
                    <div className="col-lg-6">
                    <div className="col-lg-3">
                    <p><b>Total Seats: {dataObj.eventNumSeat}</b></p>
                    </div>
                    <div className="col-lg-3">
                    <p><b>Remaining Seats: {dataObj.eventNumSeat-dataObj.bookedSeat} </b></p>
                    </div>
                    </div>
                    <div className="col-lg-6">
                      <button className="btn btn-primary col-lg-6"> Buy</button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>;
       })}
    </div>
  );
}

export default Events;
