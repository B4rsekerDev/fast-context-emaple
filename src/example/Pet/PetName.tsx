import usePetState from "./usePetState";

function PetName() {
  const [name] = usePetState("name")

  return (
    <h5>{name}</h5>
  )
}

export default PetName
