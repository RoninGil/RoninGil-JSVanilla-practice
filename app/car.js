class Car {
    gas = 0;
    company = 'not defined';
    model = 'not defined';
    year = 'not specified';
    wheels = 4;
    kmPerLt = 0;
    color = 'not specified';
    hybrid = false;
    tank = 0;
    kms = 0;
    price=0;
  
    constructor(props) {
      this.company = props['company'];
      this.color = props['color'];
      this.kmPerLt = props.kmPerLt;
      this.tank = props.tank;
      this.price = props.price;
      this.year = props.year;
    }
  
    availableGasSpace() {
      return this.tank - this.gas;
    }
  
    addGas(liters) {
      if (liters > this.availableGasSpace()) {
        this.gas = this.tank;
      } else {
        this.gas += liters;
      }
    }
  
    currentGas() {
      return this.gas;
    }
  
    maximumDistanceToTravel() {
      return this.gas * this.kmPerLt;
    }
  
    move(kms) {
      this.maximumDistanceToTravel();
      if (kms > this.maximumDistanceToTravel()) {
        this.kms += this.maximumDistanceToTravel();
        this.gas -= this.maximumDistanceToTravel() / this.kmPerLt;
      } else {
        this.kms += kms;
        this.gas -= kms / this.kmPerLt;
      }
    }
    
    currentSalePrice(kms) {
        //agregar la actualizacion del precio del carro
        // hacer una division, cada 5000 km se va a restar un 5% el precio del carro hasta un maximo del 80%
        var newPrice = (((kms/5000)*-.05)+1)*this.price;
        return (((kms/5000)*-.05)+1) <= .2 ? this.price*.2 : newPrice ;
    }
  }
  
    

  module.exports = Car;
  