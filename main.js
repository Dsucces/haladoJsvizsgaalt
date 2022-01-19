class Project {
    resultTbody;
    oldestCarBtn;
    after2004Btn;
    before2004Btn
    searchCarBrandBtn;
    searchField;

    constructor() {
        this.resultTbody = document.getElementById('resultTbody');
        this.oldestCarBtn = document.getElementById('oldestCarBtn');
        this.after2004Btn = document.getElementById('after2004Btn');
        this.before2004Btn = document.getElementById('before2004Btn');
        this.searchCarBrandBtn = document.getElementById('searchCarBrandBtn');
        this.searchField = document.getElementById('searchField');

        this.oldestCarBtn.onclick = this.findOldestCar;
        this.after2004Btn.onclick = this.findCarsAfter2004;
        this.before2004Btn.onclick = this.findCarsBefore2004;
        this.searchCarBrandBtn.onclick = this.searchForCarBrand;
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

    showErrorMsg = (errorMsg) => {
        this.searchField.value = '';
        this.resultTbody.innerHTML = '';
        alert(console.errorMsg);
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

    findCarsAfter2004 = async () => {
        let cars = await this.requestCars();

        for(let carData of cars) {
            if(carData.factoryYear > 2004) {
                result.push(carData);
            }
        }
        this.putCarsToTable(result);
    }
    
    searchForCarBrand = async () => {
        const searchText = zhis. searchField.value.toLowerCase();

        if(searchText-length > 0) {
            let cars = await this.requestCars();

            let result = [];
            for(let carData of cars) {
                if(carData.brand.toLowerCase() == searchText) {
                    result.push(carData);
                }
            }
            if(result.length > 0) {
                this.putCarsToTable(result);
            }else{
                this.showErrorMsg('Nincs találat!');

            }

        }else{
            this.showErrorMsg('A beviteli mező űres!');

        }
    }
    findCarsBefore2004 = async () => {
        let cars = await this.requestCars();

        let result = [];
        for(let carData of cars) {
            if(carData.factoryYear < 2004) {
                result.push(carData);
            }
        }
        this.putCarsToTable(result);
    }

}
const projectObj = new Project 