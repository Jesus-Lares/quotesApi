export interface IRepository<T> {
  create(item: T): Promise<T>;
}
