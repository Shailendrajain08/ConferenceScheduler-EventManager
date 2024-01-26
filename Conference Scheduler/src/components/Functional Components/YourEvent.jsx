import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function YourEvent() {
  const usenavigate = useNavigate();

  const [yourEvent, setYourEvent] = useState([]);
  const [userID, setUserID] = useState([]);

  useEffect(() => {
    let id = sessionStorage.getItem("username");
    if (id === "" || id === null) {
      usenavigate("/");
    } else {
      setUserID(id);
      fetch("http://localhost:3000/events")
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          setYourEvent(resp);
          return resp;
        })
        .catch((err) => {
          console.log(`Something Went Wrong`, `${err.message}`);
        });
    }
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
      {yourEvent.map((dataObj) => {
        if (dataObj.eventOrganizerId === userID) {
          return (
            <>
              <div className="offset-lg-1 col-lg-10 my-1">
                <div className="container">
                  <div className="card ">
                    <div className="card-header bs-success-bg-subtle">
                      <h3>
                        <b>Name of the Event: </b>
                        {dataObj.eventName}
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-6">
                          <p>
                            <b>Organizer: </b>
                            {dataObj.eventOrganizer}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <b>Event Type: </b>
                            {dataObj.eventType}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <b>Event Speaker Details: </b>
                            {dataObj.eventSpeakerDetails}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <b>Event Location & Address: </b>
                            {dataObj.eventLocationAddress}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <b>Event Date: </b>
                            {dataObj.eventDate}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <b>Event Time: </b>
                            {dataObj.eventTime}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <b>Event Details: </b>
                            {dataObj.eventDescription}
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <p>
                            <b>Organizer Details: </b>
                            {dataObj.eventOrganizerDetails}
                          </p>
                        </div>
                        <div className="card-footer ">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-lg-3">
                                  <p>
                                    <b>Total Seats: </b>
                                    {dataObj.eventNumSeat}
                                  </p>
                                </div>
                                <div className="col-lg-3">
                                  <p>
                                    <b>Seats Left: </b>
                                    {dataObj.eventNumSeat - dataObj.bookedSeat}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}

export default YourEvent;
