class Project {
    resultTbody;
    oldestCarBtn;
    after2004Btn;
    searchCarBrandBtn;
    searchField;

    constructor() {
        this.resultTbody = document.getElementById('resultTbody');
        this.oldestCarBtn = document.getElementById('oldestCarBtn');
        this.after2004Btn = document.getElementById('after2004Btn');
        this.searchCarBrandBtn = document.getElementById('searchCarBrandBtn');
        this.searchField = document.getElementById('searchField');

        this.oldestCarBtn.onclick = this.findOldestCar;
    }

    requestCars = async () => {
        let respond = await fetch('cars.json');
        let cars = await respond.json();
        return cars;
    }


    putCarsToTable = (carArray) => {
        let resultHtml = '';
        for(let carData of carArray) {
            resultHtml +=
            `<tr>
                <td>${carData.brand}</td>
                <td>${carData.type}</td>
                <td>${carData.factoryYear}</td>
            </tr>`;
        }
        this.resultTbody.innerHTML = resultHtml;
    }

    findOldestCar = async () => {
        let cars = await this.requestCars();

        let minYear = cars[0].factoryYear;
        for(let i=1; i<cars.length; i++) {
            if(cars[i].factoryYear < minYear) {
                minYear = cars[i].factoryYear;
            }
        }

        let result = [];
        for(let carData of cars) {
            if(carData.factoryYear == minYear) {
                result.push(carData);
            }
        }

        this.putCarsToTable(result);
    }

}
const projectObj = new Project 