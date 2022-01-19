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

        this.oldestCarBtn.onclick = this.findOldestCarBtn;
        this.after2004Btn.onclick = this.findAfter2004;
        this.searchCarBrandBtn.onclick = this.searchCarBrand;
    }
}
const projectObj = new Project 