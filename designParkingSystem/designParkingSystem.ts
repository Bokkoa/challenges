export class ParkingSystem {

  private bigSlots: number;
  private mediumSlots: number;
  private smallSlots: number;

  constructor(big: number, medium: number, small: number) {
      
    this.bigSlots = big;
    this.mediumSlots = medium;
    this.smallSlots = small;
  }

  addCar(carType: number): boolean {
      
    switch (carType) {
      case 1:
          if(this.bigSlots <= 0) return false;
          this.bigSlots --;
          return true;
      case 2:
        if(this.mediumSlots <= 0) return false;
        this.mediumSlots --;
      return true;

      case 3:
        if(this.smallSlots <= 0) return false;
        this.smallSlots --;
        return true;

        default:
        return false;
    }
  }
}

/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new ParkingSystem(big, medium, small)
* var param_1 = obj.addCar(carType)
*/

var obj = new ParkingSystem(1, 1, 0)
console.log(obj.addCar(1));
console.log(obj.addCar(2));
console.log(obj.addCar(3));
console.log(obj.addCar(1));
