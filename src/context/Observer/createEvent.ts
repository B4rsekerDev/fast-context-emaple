import EventModel from "./Event.model";

function createEvent<T>(name: string, previous: T, current: T): EventModel<T> {
  return new EventModel(name, previous, current);
}

export default createEvent;
