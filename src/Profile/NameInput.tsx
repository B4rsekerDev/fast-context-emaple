import useProfileState from "./useProfileState";

function NameInput() {
  const [name, setName] = useProfileState("name")

  return (
    <input
      type={"text"}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  )
}

export default NameInput
