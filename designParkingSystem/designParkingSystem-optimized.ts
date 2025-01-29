export class ParkingSystem {

  private parking = {

  };

  constructor(big: number, medium: number, small: number) {
    
    this.parking[1] = big;
    this.parking[2] = medium;
    this.parking[3] = small;
  }

  addCar(carType: number): boolean {
      
      if(this.parking[carType] <= 0) return false;
      
      this.parking[carType] -= 1;
      return true;
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
