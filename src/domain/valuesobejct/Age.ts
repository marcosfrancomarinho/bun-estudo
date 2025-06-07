export class Age {
  private constructor(private age: number) {}

  public getValue(): number {
    return this.age;
  }
  public static create(age: number): Age {
    this.validate(age);
    return new Age(age);
  }
  private static validate(age: number): void {
    if (!age || typeof age !== 'number' || isNaN(age)) throw new Error('age invalid.');
  }
}
