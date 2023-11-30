import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import GeneralClass from "./general_class.js"; 

class Hkg3 extends GeneralClass {
    constructor() {
        super()
        this.tulisanHkg3Model1 = document.getElementById("model1");
        this.tulisanHkg3Model2 = document.getElementById("model2");
        this.tulisanHkg3Model3 = document.getElementById("model3");
        this.tulisanHkg3Model4 = document.getElementById("model4");
        this.tulisanHkg3Model5 = document.getElementById("model5");

        this.hkg3Model1 = true;
        this.hkg3Model2 = false;
        this.hkg3Model3 = false;
        this.hkg3Model4 = false;
        this.hkg3Model5 = false;

        this.loader = new FBXLoader();
        this.WarnaDanModelDitampilan = "";
        this.warnaDanModelFile = "../assets/3d/HKG3.fbx";

        this.threejs();
        this.editModel(this.warnaDanModelFile);
        this.animasi();
    }

    threejs() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0xffffff);
        this.viewerContainer.appendChild(this.renderer.domElement);
        this.camera.position.set(0, 50, 600);
        this.camera.lookAt(0, 0, 0);
    }

    editModel(modelFile) {
        if (this.WarnaDanModelDitampilan) {
            this.scene.remove(this.WarnaDanModelDitampilan);
        }
        this.loader.load(modelFile, (fbx) => {
            this.WarnaDanModelDitampilan = fbx;
            this.scene.add(this.WarnaDanModelDitampilan);
        });
    }

    tulisanDanBooleanHkg3Model1() {
        this.tulisanHkg3Model1.style.display = "block";
        this.tulisanHkg3Model2.style.display = "none";
        this.tulisanHkg3Model3.style.display = "none";
        this.tulisanHkg3Model4.style.display = "none";
        this.tulisanHkg3Model5.style.display = "none";
        this.hkg3Model1 = true;
        this.hkg3Model2 = false;
        this.hkg3Model3 = false;
        this.hkg3Model4 = false;
        this.hkg3Model5 = false;
    }

    tulisanDanBooleanHkg3Model2() {
        this.tulisanHkg3Model1.style.display = "none";
        this.tulisanHkg3Model2.style.display = "block";
        this.tulisanHkg3Model3.style.display = "none";
        this.tulisanHkg3Model4.style.display = "none";
        this.tulisanHkg3Model5.style.display = "none";
        this.hkg3Model1 = false;
        this.hkg3Model2 = true;
        this.hkg3Model3 = false;
        this.hkg3Model4 = false;
        this.hkg3Model5 = false;
    }

    tulisanDanBooleanHkg3Model3() {
        this.tulisanHkg3Model1.style.display = "none";
        this.tulisanHkg3Model2.style.display = "none";
        this.tulisanHkg3Model3.style.display = "block";
        this.tulisanHkg3Model4.style.display = "none";
        this.tulisanHkg3Model5.style.display = "none";
        this.hkg3Model1 = false;
        this.hkg3Model2 = false;
        this.hkg3Model3 = true;
        this.hkg3Model4 = false;
        this.hkg3Model5 = false;
    }

    tulisanDanBooleanHkg3Model4() {
        this.tulisanHkg3Model1.style.display = "none";
        this.tulisanHkg3Model2.style.display = "none";
        this.tulisanHkg3Model3.style.display = "none";
        this.tulisanHkg3Model4.style.display = "block";
        this.tulisanHkg3Model5.style.display = "none";
        this.hkg3Model1 = false;
        this.hkg3Model2 = false;
        this.hkg3Model3 = false;
        this.hkg3Model4 = true;
        this.hkg3Model5 = false;
    }

    tulisanDanBooleanHkg3Model5() {
        this.tulisanHkg3Model1.style.display = "none";
        this.tulisanHkg3Model2.style.display = "none";
        this.tulisanHkg3Model3.style.display = "none";
        this.tulisanHkg3Model4.style.display = "none";
        this.tulisanHkg3Model5.style.display = "block";
        this.hkg3Model1 = false;
        this.hkg3Model2 = false;
        this.hkg3Model3 = false;
        this.hkg3Model4 = false;
        this.hkg3Model5 = true;
    }

    addListeners() {
        this.kananButton.addEventListener("click", () => {
            if (this.hkg3Model1) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Depan1.fbx");
                this.tulisanDanBooleanHkg3Model2();   
            } 
            else if (this.hkg3Model2) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Depan2.fbx");
                this.tulisanDanBooleanHkg3Model3(); 
            }
            else if (this.hkg3Model3) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Scope1.fbx");
                this.tulisanDanBooleanHkg3Model4();  
            }
            else if (this.hkg3Model4) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Lengkap.fbx");
                this.tulisanDanBooleanHkg3Model5();  
            }
            else if (this.hkg3Model5) {
                this.editModel("../assets/3d/HKG3.fbx");
                this.tulisanDanBooleanHkg3Model1(); 
            }
        });

        this.kiriButton.addEventListener("click", () => {
            if (this.hkg3Model1) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Lengkap.fbx");
                this.tulisanDanBooleanHkg3Model5(); 
            } 
            else if (this.hkg3Model2) {
                this.editModel("../assets/3d/HKG3.fbx");
                this.tulisanDanBooleanHkg3Model1(); 
            }
            else if (this.hkg3Model3) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Depan1.fbx");
                this.tulisanDanBooleanHkg3Model2();  
            }
            else if (this.hkg3Model4) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Depan2.fbx");
                this.tulisanDanBooleanHkg3Model3(); 
            }
            else if (this.hkg3Model5) {
                this.editModel("../assets/3d/HKG3_Aksesoris_Scope1.fbx");
                this.tulisanDanBooleanHkg3Model4(); 
            }
        });

        this.beliButton.addEventListener("click", () => {
            if (this.hkg3Model1) {
                window.location.href = "../form/hkg3/form_hkg3_basic.html";
            }
            else if (this.hkg3Model2) {
                window.location.href = "../form/hkg3/form_hkg3_silencer.html";
            }
            else if (this.hkg3Model3) {
                window.location.href = "../form/hkg3/form_hkg3_light.html";
            }
            else if (this.hkg3Model4) {
                window.location.href = "../form/hkg3/form_hkg3_scope.html";
            }
            else if (this.hkg3Model5) {
                window.location.href = "../form/hkg3/form_hkg3_fullitem.html";
            }
        });
    }

    animasi() {
        requestAnimationFrame(() => this.animasi());
        if (this.WarnaDanModelDitampilan) {
            this.WarnaDanModelDitampilan.rotation.y += 0.005;
        }
        this.renderer.render(this.scene, this.camera);
    }
}

const senjataApi_hkg3 = new Hkg3();
