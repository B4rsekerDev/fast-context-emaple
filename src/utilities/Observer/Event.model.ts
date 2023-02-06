class EventModel<T> {
  private readonly name: string;

  private readonly current: T;

  private readonly previous: T;

  private readonly createdAt: number;

  getName(): string {
    return this.name;
  }

  getCurrent(): T {
    return this.current;
  }

  getPrevious(): T {
    return this.previous;
  }

  getCreatedAt(): number {
    return this.createdAt;
  }

  constructor(name: string, previous: T, current: T) {
    this.name = name;

    this.current = current;
    this.previous = previous;

    this.createdAt = Date.now();
  }
}

export default EventModel;
