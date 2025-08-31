import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "../../components/UserCard/UserCard";
import {
  faCakeCandles,
  faVenusMars,
  faEnvelope,
  faAddressBook,
  faPhone,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function Overview() {
  return (
    <div className="usercard-container">
      <div className="usercard-header">
        <img
          className="usercard-header-image"
          src="https://randomuser.me/api/portraits/men/75.jpg"
        />
      </div>
      <div className="usercard-body">
        <div className="usercard-body-title">
          <strong>Liam</strong>
        </div>
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <span className="usercard-data-text">01.01.1970</span>
            </div>
          </div>
          <div className="usercard-data-list-item">
            <span className="usercard-data-icon">
              <FontAwesomeIcon icon={faVenusMars} />
            </span>
            <span className="usercard-data-text">Männlich</span>
          </div>
          <div className="usercard-data-list-item">
            <span className="usercard-data-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="usercard-data-text">test@test.de</span>
          </div>
        </div>
        <div className="usercard-data-list">
          <div className="usercard-data-list-item">
            <span className="usercard-data-icon">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <span className="usercard-data-text">Musterstr.1</span>
          </div>
        </div>
        <div className="usercard-data-list-item">
          <span className="usercard-data-icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="usercard-data-text">012345678</span>
        </div>
        <div className="usercard-data-list-item">
          <span className="usercard-data-icon">
            <FontAwesomeIcon icon={faGlobe} />
          </span>
          <span className="usercard-data-text">www.test.de</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
