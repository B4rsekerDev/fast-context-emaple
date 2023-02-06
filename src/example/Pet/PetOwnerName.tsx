import usePetState from "./usePetState";

function PetOwnerName() {
  const [owner] = usePetState("ownerNameSnapshot")
  return <h5>{owner}</h5>
}

export default PetOwnerName
