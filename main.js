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
}
const projectObj = new Project 