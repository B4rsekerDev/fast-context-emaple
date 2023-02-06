import React from "react";
import type {ProfileState} from "./Profile.types";
import {useProfileProvider} from "./Profile.provider";

function useProfileStore<R>(selector: (state: ProfileState) => R): R {
  return React.useSyncExternalStore(
    ...useProfileProvider().createStore(selector)
  )
}

export default useProfileStore;
