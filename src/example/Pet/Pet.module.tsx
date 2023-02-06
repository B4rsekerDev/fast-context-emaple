import PetModel from "./Pet.model";
import React from "react";
import {useProfileProvider} from "../Profile/Profile.provider";
import PetProvider from "./Pet.provider";

function PetModule({ children }: { children: React.ReactNode }) {
  const profile = useProfileProvider()

  const pet = React.useMemo(() => new PetModel({
    name: "Fido",
    type: "dog",
    ownerNameSnapshot: null
  }), [])

  React.useEffect(() => {
    const trigger = profile.register([pet.changeOwnerNameListener()])
    const clear = trigger()
    return () => {
      clear()
    }

  }, [])

  return (
    <PetProvider model={pet}>
      {children}
    </PetProvider>
  );
}

export default PetModule;
