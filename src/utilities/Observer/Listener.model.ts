import EventModel from "./Event.model";

class ListenerModel<T> {
  private readonly fn: (event: EventModel<T>) => void;

  invoke(event: EventModel<T>): void {
    this.fn(event);
  }

  constructor(fn: (event: EventModel<T>) => void) {
    this.fn = fn;
  }
}

export default ListenerModel;
