export class ID {
  private constructor(private id: number) {}

  public getValue(): number {
    return this.id;
  }
  public static create(id: number): ID {
    this.validate(id);
    return new ID(id);
  }
  private static validate(id: number): void {
    if (!id || typeof id !== 'number' || isNaN(id)) throw new Error('id invalid.');
  }
}
