import type ListenerModel from "./Listener.model";
import type EventModel from "./Event.model";
import createListener from "./createListener";

class ObserverService<T> {
  private readonly listeners: Set<ListenerModel<T>>;

  register(subscriptions: ReadonlyArray<ListenerModel<T>>) {
    return () => {
      this.subscribe(subscriptions);
      return () => {
        this.unsubscribe(subscriptions);
      };
    };
  }

  subscribe(subscriptions: ReadonlyArray<ListenerModel<T>>): void {
    subscriptions.forEach((subscription) => (
      this.listeners.add(subscription)
    ));
  }

  unsubscribe(subscriptions: ReadonlyArray<ListenerModel<T>>): void {
    subscriptions.forEach((subscription) => (
      this.listeners.delete(subscription)
    ));
  }

  publish(event: EventModel<T>): void {
    this.listeners.forEach((listener) => listener.invoke(event));
  }

  protected externalSubscribe(listener: ListenerModel<T>) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  protected externalAdapter(handler: (event: EventModel<T>) => void) {
    return this.externalSubscribe(createListener(handler));
  }

  constructor() {
    this.listeners = new Set([]);
  }
}

export default ObserverService;
