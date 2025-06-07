import type { Age } from '../valuesobejct/Age';
import type { ID } from '../valuesobejct/ID';
import type { Name } from '../valuesobejct/Name';

export class User {
  private constructor(private name: Name, private age: Age, private id?: ID) {}

  public static create(name: Name, age: Age): User {
    return new User(name, age);
  }
  public setId(id: ID): void {
    this.id = id;
  }
  public getAge(): number {
    return this.age.getValue();
  }
  public getID(): number {
    if (!this.id) throw new Error('ID not found');
    return this.id.getValue();
  }
  public getUserCreatedMessage(): string {
    return `user ${this.name.getValue()} created with success`;
  }

  public getName(): string {
    return this.name.getValue();
  }
}
