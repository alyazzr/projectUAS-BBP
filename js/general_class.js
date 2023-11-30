class GeneralClass {
    #viewerContainer
    #warnaDanModelFile
    constructor() {
        this.#viewerContainer = document.getElementById("viewer");
        this.kananButton = document.getElementById("kanan");
        this.kiriButton = document.getElementById("kiri");
        this.beliButton = document.getElementById("button_beli");

        this.#warnaDanModelFile = "../assets/3d/Ak-47.fbx";

        this.addListeners();
    }

    get viewerContainer() {
        return this.#viewerContainer;
    }

    get warnaDanModelFile() {
        return this.#warnaDanModelFile;
    }

    set warnaDanModelFile(value) {
        this.#warnaDanModelFile = value;
    }
    
    addListeners() {
        this.kananButton.addEventListener("click", () => {
            if (this.ak47) {
                this.editModel("../assets/3d/M16.fbx");
                this.tulisanDanBooleanM16(); 
            } 
            else if (this.m16) {
                this.editModel("../assets/3d/HKG3.fbx");
                this.tulisanDanBooleanHkg3(); 
            }
            else if (this.hkg3) {
                this.editModel("../assets/3d/AK-47.fbx");
                this.tulisanDanBooleanAk47(); 
            }
        });

        this.kiriButton.addEventListener("click", () => {
            if (this.ak47) {
                this.editModel("../assets/3d/HKG3.fbx");
                this.tulisanDanBooleanHkg3(); 
            } 
            else if (this.m16) {
                this.editModel("../assets/3d/AK-47.fbx");
                this.tulisanDanBooleanAk47(); 
            }
            else if (this.hkg3) {
                this.editModel("../assets/3d/M16.fbx");
                this.tulisanDanBooleanM16(); 
            }
        });

        this.beliButton.addEventListener("click", () => {
            if (this.ak47) {
                window.location.href = "../form/ak-47/form_ak-47_basic.html";
            }
            else if (this.m16) {
                window.location.href = "../form/m16/form_m16_basic.html";
            }
            else if (this.hkg3) {
                window.location.href = "../form/hkg3/form_hkg3_basic.html";
            }
        });
    }
}

const generalClass = new GeneralClass();
export default GeneralClass;
