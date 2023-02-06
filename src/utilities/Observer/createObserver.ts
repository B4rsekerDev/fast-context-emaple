import ObserverService from "./Observer.service";

function createObserver<T>() {
  return new ObserverService<T>();
}

export default createObserver;
