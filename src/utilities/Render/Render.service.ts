import ObserverService from "../Observer/Observer.service";
import type EventModel from "../Observer/Event.model";
import createEvent from "../Observer/createEvent";

class RenderService<T> extends ObserverService<T> {
  private state: T;

  get(): T {
    return this.state;
  }

  change(update: Partial<T>) {
    this.update({
      ...this.state,
      ...update,
    });
  }

  createStore<R>(selector: (state: T) => R): Readonly<[
    (handler: (event: EventModel<T>) => void) => () => void,
    () => R,
    () => R,
  ]>;
  createStore(selector?: undefined): Readonly<[
    (handler: (event: EventModel<T>) => void) => () => void,
    () => T,
    () => T,
  ]>;
  createStore<R>(selector?: (state: T) => R) {
    return [
      this.externalAdapter.bind(this),
      selector ? () => selector(this.state) : this.get.bind(this),
      selector ? () => selector(this.state) : this.get.bind(this),
    ] as const;
  }

  protected update(current: T) {
    const previous = current;

    this.state = current;

    this.publish(
      createEvent(
        'render-service-update',
        previous,
        this.state,
      ),
    );
  }

  constructor(initialState: T) {
    super();

    this.state = initialState;
  }
}

export default RenderService;
