import type EventModel from "./Event.model";
import ListenerModel from "./Listener.model";

function createListener<T>(fn: (model: EventModel<T>) => void) {
  return new ListenerModel(fn);
}

export default createListener;
