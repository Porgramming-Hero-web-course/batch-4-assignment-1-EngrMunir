{
    class Car {
        make:string;
        modal:string;
        year: number;

        constructor(make:string, modal:string, year:number){
            this.make=make;
            this.modal=modal;
            this.year=year;
        }

        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }


    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge())

}