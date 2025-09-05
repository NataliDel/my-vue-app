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
import type { User } from "../../types/User";

type UserCardProps = {
  user: User;
};

function Overview({ user }: UserCardProps) {
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
          <strong>{user.name}</strong>
        </div>
        <div className="usercard-body-content">
          <div className="usercard-data-list">
            <div className="usercard-data-list-item">
              <span className="usercard-data-icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </span>
              <span className="usercard-data-text">{user.dob}</span>
            </div>
          </div>
          <div className="usercard-data-list-item">
            <span className="usercard-data-icon">
              <FontAwesomeIcon icon={faVenusMars} />
            </span>
            <span className="usercard-data-text">{user.gender}</span>
          </div>
          <div className="usercard-data-list-item">
            <span className="usercard-data-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className="usercard-data-text">{user.email}</span>
          </div>
        </div>
        <div className="usercard-data-list">
          <div className="usercard-data-list-item">
            <span className="usercard-data-icon">
              <FontAwesomeIcon icon={faAddressBook} />
            </span>
            <span className="usercard-data-text">{user.address}</span>
          </div>
        </div>
        <div className="usercard-data-list-item">
          <span className="usercard-data-icon">
            <FontAwesomeIcon icon={faPhone} />
          </span>
          <span className="usercard-data-text">{user.phone}</span>
        </div>
        <div className="usercard-data-list-item">
          <span className="usercard-data-icon">
            <FontAwesomeIcon icon={faGlobe} />
          </span>
          <span className="usercard-data-text">{user.web}</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
