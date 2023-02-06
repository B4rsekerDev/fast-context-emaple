import NameInput from "./NameInput";
import EmailInput from "./EmailInput";
import PetOwnerName from "../Pet/PetOwnerName";
import PetName from "../Pet/PetName";

function ProfileComponent() {
  return (
    <div>
      <h5>profile</h5>
      <NameInput />
      <br />
      <br />
      <EmailInput />
      <br/>
      <br/>
      <div>
        Pet <PetName />
        is owned by <PetOwnerName />
      </div>
    </div>
  )
}

export default ProfileComponent
