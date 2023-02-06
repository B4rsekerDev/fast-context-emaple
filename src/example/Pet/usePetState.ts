import {usePetProvider} from "./Pet.provider";
import usePetStore from "./usePetStore";
import type {PetState} from "./Pet.types";
import React from "react";

function usePetState(key: keyof PetState) {
  const provider = usePetProvider()
  const state = usePetStore((state) => state[key])

  const change = (value: PetState[keyof PetState]) => {
    provider.change({
      [key]: value,
    })
  }

  return [
    state,
    React.useCallback(change, [])
  ] as const
}

export default usePetState
