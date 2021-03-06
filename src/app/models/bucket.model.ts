
export class Bucket {
  public remainingScoops = 96;
  public currentScoops = 0;
  constructor(public flavor: string, public scoopPrice: number, public color: string, public fontColor: string = 'black') { }

  addScoop() {
    if (this.remainingScoops > 0) {
      this.remainingScoops -= 1;
      this.currentScoops += 1;
      return true;
    } else {
      return false;
    }
  }

  subtractScoop() {
    if (this.currentScoops > 0) {
      this.remainingScoops += 1;
      this.currentScoops -= 1;
      return true;
    }
    return false;
  }

  totalPrice() {
    return (Math.round((this.currentScoops * this.scoopPrice) * 100) / 100);
  }

}
