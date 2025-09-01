import TextInput from "../../components/TextInput/TextInput";
import DateInput from "../../components/DateInput/DateInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { useFormInput } from "../../Hooks/useFormInput";
import "./createView.scss";
import { useContext } from "react";
import { Gender } from "../../types/User";
import type { User } from "../../types/User";
import { UserContext } from "../../context/UserContext";

function CreateView() {
  const userNameProps = useFormInput("", true);
  const dobProps = useFormInput("", true);
  const genderProps = useFormInput("", true);
  const emailProps = useFormInput("", true);
  const addressProps = useFormInput("", true);
  const telephoneProps = useFormInput("", true);
  const websiteProps = useFormInput("", true);

  const { usersDispatch } = useContext(UserContext);

  function convertStringToGender(value: string): Gender {
    switch (value) {
      case "Männlich":
        return Gender.MALE;
      case "Weiblich":
        return Gender.FEMALE;
      case "Divers":
        return Gender.OTHER;
      default:
        return Gender.OTHER;
    }
  }
  function handleSubmitNewUser() {
    const user: User = {
      id: Math.random(),
      name: userNameProps.value,
      dob: dobProps.value,
      gender: convertStringToGender(genderProps.value),
      email: emailProps.value,
      address: addressProps.value,
      phone: telephoneProps.value,
      web: websiteProps.value,
    };

    usersDispatch({ type: "ADD_USER", user: user });
    alert("Added user");
  }

  return (
    <div className="input-form-container">
      <div className="input-container">
        <span className="input-title">Username</span>
        <TextInput
          value={userNameProps.value}
          onChange={userNameProps.handleInputChangeEvent}
          error={userNameProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Geburtsdatum</span>
        <DateInput
          value={dobProps.value}
          onChange={dobProps.handleInputChangeEvent}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Geschlecht</span>
        <SelectInput
          value={genderProps.value}
          onChange={genderProps.handleInputChangeEvent}
          options={["Männlich", "Weiblich", "Divers"]}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Email Adresse</span>
        <TextInput
          value={emailProps.value}
          onChange={emailProps.handleInputChangeEvent}
          error={emailProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Post Adresse</span>
        <TextInput
          value={addressProps.value}
          onChange={addressProps.handleInputChangeEvent}
          error={addressProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Telefonnummer</span>
        <TextInput
          value={telephoneProps.value}
          onChange={telephoneProps.handleInputChangeEvent}
          error={telephoneProps.error}
        />
      </div>
      <div className="input-container">
        <span className="input-title">Website</span>
        <TextInput
          value={websiteProps.value}
          onChange={websiteProps.handleInputChangeEvent}
          error={websiteProps.error}
        />
      </div>
      <SubmitButton onClick={handleSubmitNewUser} />
    </div>
  );
}

export default CreateView;
