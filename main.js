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

}
const projectObj = new Project 