import type ProfileService from "./Profile.service";
import createContext from "../utilities/createContext";

const [Provider, useProvider] = createContext<ProfileService>("ProfileContext");

function ProfileProvider({ children, service }: Props) {
  return (
    <Provider value={service}>
      {children}
    </Provider>
  );
}

type Props = Readonly<{
  children: React.ReactNode;
  service: ProfileService;
}>

export { useProvider as useProfileProvider };

export default ProfileProvider;
