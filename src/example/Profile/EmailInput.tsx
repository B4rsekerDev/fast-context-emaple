import useProfileState from "./useProfileState";

function EmailInput() {
  const [email, setEmail] = useProfileState("email")

  return (
    <input
      type={"email"}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  )
}

export default EmailInput
