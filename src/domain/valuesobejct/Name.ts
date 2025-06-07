export class Name {
  private constructor(private name: string) {}

  public static create(name: string): Name {
    this.validate(name);
    return new Name(name);
  }
  public static validate(name: string): void {
    if (!name || typeof name !== 'string' || name.trim().length === 0) throw new Error('name invalid.');
  }
  public getValue(): string {
    return this.name;
  }
}
