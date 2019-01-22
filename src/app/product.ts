export class Product {

   constructor (public question: string, public answer: string) {}

   toForm(): string {
      return `question=${this.question}&answer=${this.answer}`;
   }
}
