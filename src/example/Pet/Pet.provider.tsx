import type PetModel from "./Pet.model";
import createContext from "../../context/createContext";

const [Provider, useProvider] = createContext<PetModel>("PetContext")

function PetProvider({ children, model }: Props) {
  return (
    <Provider value={model}>
      {children}
    </Provider>
  )
}

type Props = {
  children: React.ReactNode;
  model: PetModel;
}

export {
  useProvider as usePetProvider,
}

export default PetProvider
