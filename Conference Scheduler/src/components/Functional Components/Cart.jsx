import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

function Cart() {
  const { id } = useParams();
  const usenavigate = useNavigate();

  const [userID, setUserID] = useState("");
  const [selectedEvent, setSelectedEvent] = useState([]);

  useEffect(() => {
    let userId = sessionStorage.getItem("username");
    if (userId === "" || userId === null) {
      usenavigate("/");
    } else {
      setUserID(userId);
      fetch("http://localhost:3000/events/" + id)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          setSelectedEvent(resp);
          return resp;
        })
        .catch((err) => {
          console.log(`Something Went Wrong`, `${err.message}`);
        });
    }
  }, []);

  const handleBuy = (item) => {
    item.buyerList.push(userID);
    item.bookedSeat ++
    fetch("http://localhost:3000/events", {
        method: "PUT",
        body: JSON.stringify(item),
      })
        .then((res) => {
            console.log(res)
        //   usenavigate("/events")
        })
        .catch((err) => {
            console.log(err.message)
        });
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

      <div className="offset-lg-1 col-lg-10 my-1">
        <div className="container">
          <div className="card ">
            <div className="card-header bs-success-bg-subtle">
              <h3>
                <b>Name of the Event: </b>
                {selectedEvent.eventName}
              </h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <p>
                    <b>Organizer: </b>
                    {selectedEvent.eventOrganizer}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <b>Event Type: </b>
                    {selectedEvent.eventType}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <b>Event Speaker Details: </b>
                    {selectedEvent.eventSpeakerDetails}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <b>Event Location & Address: </b>
                    {selectedEvent.eventLocationAddress}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <b>Event Date: </b>
                    {selectedEvent.eventDate}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <b>Event Time: </b>
                    {selectedEvent.eventTime}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <b>Event Details: </b>
                    {selectedEvent.eventDescription}
                  </p>
                </div>
                <div className="col-lg-6">
                  <p>
                    <b>Organizer Details: </b>
                    {selectedEvent.eventOrganizerDetails}
                  </p>
                </div>
                <div className="card-footer ">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-3">
                          <p>
                            <b>Total Seats: </b>
                            {selectedEvent.eventNumSeat}
                          </p>
                        </div>
                        <div className="col-lg-3">
                          <p>
                            <b>Seats Left: </b>
                            {selectedEvent.eventNumSeat -
                              selectedEvent.bookedSeat}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <button
                        className="btn btn-primary col-lg-6"
                        onClick={() => handleBuy(selectedEvent)}
                      >
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
    </div>
  );
}

export default Cart;
