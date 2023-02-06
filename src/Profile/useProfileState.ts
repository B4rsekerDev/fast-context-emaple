import {ProfileState} from "./Profile.types";
import {useProfileProvider} from "./Profile.provider";
import useProfileStore from "./useProfileStore";
import React from "react";

function useProfileState(key: keyof ProfileState) {
  const service = useProfileProvider()
  const state = useProfileStore((state) => state[key])

  const change = (value: ProfileState[keyof ProfileState]) => {
    service.change({
      [key]: value,
    })
  }

  return [
    state,
    React.useCallback(change, [])
  ] as const
}

export default useProfileState
