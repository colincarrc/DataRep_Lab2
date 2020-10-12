class BMI {//class
    constructor(height, weight){ //constuctor
        this.height = height;
        this.weight = weight;
    }

    calculateBMI(){ // method
        let bmi = this.weight/(this.height**2); // formula for bmi
        return bmi; 
    }

}

let MyBmi = new BMI(2, 90);
let calculateBMI = MyBmi.calculateBMI();
console.log(calculateBMI);