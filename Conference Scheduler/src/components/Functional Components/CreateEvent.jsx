import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function CreateEvent() {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventOrganizer, setEventOrganizer] = useState("");
  const [eventSpeakerDetails, setEventSpeakerDetails] = useState("");
  const [eventLocationAddress, setEventLocationAddress] = useState("");
  const [eventTicketPrice, setEventTicketPrice] = useState();
  const [eventNumSeat, setEventNumSeat] = useState();
  const [eventOrganizerDetails, setEventOrganizerDetails] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [bookedSeat, setBookedSeat] = useState(0);
  const [buyerList, setBuyerList] = useState([]);


  const navigate = useNavigate();

  const handleSubmitEvent = (e) => {
    navigate("/events")
    setBookedSeat(0);
    setBuyerList([]);
    e.preventDefault();
    let eventObj = {
      eventName,
      eventType,
      eventDate,
      eventTime,
      eventOrganizer,
      eventSpeakerDetails,
      eventLocationAddress,
      eventTicketPrice,
      eventNumSeat,
      eventOrganizerDetails,
      eventDescription,
      bookedSeat,
      buyerList
    };

    if (isValidate()) {
        console.log(eventObj)
        fetch("http://localhost:3000/events", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(eventObj),
          })
            .then((res) => {
              toast.success("New Event Created", res.message);
              // navigate('/login')
            })
            .catch((err) => {
              toast.error(`Something Went Wrong`, `${err.message}`);
            });
    }
  };

  const isValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in";
    if (eventName === null || eventName === "") {
      isproceed = false;
      errormessage += "Event Title";
    }
    if (eventType === null || eventType === "") {
      isproceed = false;
      errormessage += "Event Type";
    }
    if (eventDate === null || eventDate === "") {
      isproceed = false;
      errormessage += "Date";
    }
    if (eventTime === null || eventTime === "") {
      isproceed = false;
      errormessage += "Time";
    }
    if (eventOrganizer === null || eventOrganizer === "") {
      isproceed = false;
      errormessage += "Organizer";
    }
    if (eventSpeakerDetails === null || eventSpeakerDetails === "") {
      isproceed = false;
      errormessage += "Speaker Details";
    }
    if (eventLocationAddress === null || eventLocationAddress === "") {
      isproceed = false;
      errormessage += "Location Address";
    }
    if (eventTicketPrice === null || eventTicketPrice === "") {
      isproceed = false;
      errormessage += "Ticket Price";
    }
    if (eventNumSeat === null || eventNumSeat === "") {
      isproceed = false;
      errormessage += "No. Of Seat";
    }
    if (eventOrganizerDetails === null || eventOrganizerDetails === "") {
      isproceed = false;
      errormessage += "Organizer Details";
    }
    if (eventDescription === null || eventDescription === "") {
      isproceed = false;
      errormessage += "Description";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } 
    return isproceed;
  };

  return (
    <div>
      <div className="offset-lg-1 col-lg-10 my-1">
        <form className="container">
          <div className="card ">
            <div className="card-header bs-success-bg-subtle">
              <h1>Create Event</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Event Title <span className="errmsg">*</span>
                    </label>
                    <input
                      value={eventName}
                      onChange={(e) => setEventName(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Event Type <span className="errmsg">*</span>
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Select Event Type</option>
                      <option value="Social Events: Weddings/Parties/Reunions">
                        Social Events: Weddings/Parties/Reunions
                      </option>
                      <option
                        value="Corporate Events: Conferences/Seminars and
                        Workshops/Trade Shows and Expos"
                      >
                        Corporate Events: Conferences/Seminars and
                        Workshops/Trade Shows and Expos
                      </option>
                      <option value="Cultural Events: Festivals/Concerts/Art Exhibitions">
                        Cultural Events: Festivals/Concerts/Art Exhibitions
                      </option>
                      <option
                        value="Sports Events: Tournaments/Marathons/Sporting
                        Conventions"
                      >
                        Sports Events: Tournaments/Marathons/Sporting
                        Conventions
                      </option>
                      <option
                        value="Educational Events: Graduation Ceremonies/Academic
                        Conferences/Career Fairs"
                      >
                        Educational Events: Graduation Ceremonies/Academic
                        Conferences/Career Fairs
                      </option>
                      <option
                        value="harity and Fundraising Events: Charity and
                        Fundraising/Charity Walks/Runs"
                      >
                        Charity and Fundraising Events: Charity and
                        Fundraising/Charity Walks/Runs
                      </option>
                      <option
                        value="Business and Networking Events: Product
                        Launches/Business Dinners"
                      >
                        Business and Networking Events: Product
                        Launches/Business Dinners
                      </option>
                      <option value="Religious Events: Religious Ceremonies/Festivals">
                        Religious Events: Religious Ceremonies/Festivals
                      </option>
                      <option value="Community Events: Parades/Community Fairs/Clean-Up Days">
                        Community Events: Parades/Community Fairs/Clean-Up Days
                      </option>
                      <option
                        value="Virtual Events: Webinars/Virtual Conferences/Online
                        Workshops"
                      >
                        Virtual Events: Webinars/Virtual Conferences/Online
                        Workshops
                      </option>
                      <option
                        value="Health and Wellness Events: Fitness Classes/Health
                        Fairs/Wellness Retreats"
                      >
                        Health and Wellness Events: Fitness Classes/Health
                        Fairs/Wellness Retreats
                      </option>
                      <option
                        value="Entertainment Events: Movie Premieres/Award Shows/Comedy
                        Shows"
                      >
                        Entertainment Events: Movie Premieres/Award Shows/Comedy
                        Shows
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Date <span className="errmsg">*</span>
                    </label>
                    <input
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      type="date"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Time <span className="errmsg">*</span>
                    </label>
                    <input
                      value={eventTime}
                      onChange={(e) => setEventTime(e.target.value)}
                      type="time"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Organizer<span className="errmsg">*</span>
                    </label>
                    <input
                      value={eventOrganizer}
                      onChange={(e) => setEventOrganizer(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Speaker Name And Speaker Details
                      <span className="errmsg">*</span>
                    </label>
                    <textarea
                      value={eventSpeakerDetails}
                      onChange={(e) => setEventSpeakerDetails(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Location and Address<span className="errmsg">*</span>
                    </label>
                    <textarea
                      value={eventLocationAddress}
                      onChange={(e) => setEventLocationAddress(e.target.value)}
                      type="text"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Ticket Price In INR<span className="errmsg">*</span>
                    </label>
                    <input
                      value={eventTicketPrice}
                      onChange={(e) => setEventTicketPrice(Number(e.target.value))}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      No. Of Seats<span className="errmsg">*</span>
                    </label>
                    <input
                      value={eventNumSeat}
                      onChange={(e) => setEventNumSeat(Number(e.target.value))}
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Organizer Details<span className="errmsg">*</span>
                    </label>
                    <textarea
                      value={eventOrganizerDetails}
                      onChange={(e) => setEventOrganizerDetails(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>
                      Event Description<span className="errmsg">*</span>
                    </label>
                    <textarea
                      value={eventDescription}
                      onChange={(e) => setEventDescription(e.target.value)}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer ">
              <button
                type="submit"
                onClick={handleSubmitEvent}
                className="btn btn-primary col-lg-12"
              >
                Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateEvent;
