import React from "react";
import {usePetProvider} from "./Pet.provider";
import type {PetState} from "./Pet.types";

function usePetStore<R>(selector: (state: PetState) => R) {
  return React.useSyncExternalStore(
    ...usePetProvider()
      .createStore(selector)
  )
}

export default usePetStore
