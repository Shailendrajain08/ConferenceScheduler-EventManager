import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Events() {
  const [allEvent, setAllEvent] = useState([]);

  const usenavigate = useNavigate()

  useEffect(() => {
    let id = sessionStorage.getItem('username');
    if(id === '' || id === null){
        usenavigate('/');
    }else{
    fetch("http://localhost:3000/events")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setAllEvent(resp);
        return resp;
      })
      .catch((err) => {
        console.log(`Something Went Wrong`, `${err.message}`);
      });
    }
  }, []);

  const handleCart = () => {
  return(
    <div>
      <h1>this is me!!!!!</h1>
    </div>
  )
};

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
        {console.log(dataObj);}
        return (
          <>
            <div className="offset-lg-1 col-lg-10 my-1" >
              
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
                          <div className="col-lg-6">
                            <button className="btn btn-primary col-lg-6" onClick={handleCart}>
                            
                              Buy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Events;
