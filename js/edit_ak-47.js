import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import GeneralClass from "./general_class.js"; 

class Ak47 extends GeneralClass {
    constructor() {
        super()
        this.tulisanAk47Model1 = document.getElementById("model1");
        this.tulisanAk47Model2 = document.getElementById("model2");
        this.tulisanAk47Model3 = document.getElementById("model3");
        this.tulisanAk47Model4 = document.getElementById("model4");
        this.tulisanAk47Model5 = document.getElementById("model5");

        this.ak47Model1 = true;
        this.ak47Model2 = false;
        this.ak47Model3 = false;
        this.ak47Model4 = false;
        this.ak47Model5 = false;

        this.loader = new FBXLoader();
        this.WarnaDanModelDitampilan = "";
        this.warnaDanModelFile = "../assets/3d/Ak-47.fbx";

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

    tulisanDanBooleanAk47Model1() {
        this.tulisanAk47Model1.style.display = "block";
        this.tulisanAk47Model2.style.display = "none";
        this.tulisanAk47Model3.style.display = "none";
        this.tulisanAk47Model4.style.display = "none";
        this.tulisanAk47Model5.style.display = "none";
        this.ak47Model1 = true;
        this.ak47Model2 = false;
        this.ak47Model3 = false;
        this.ak47Model4 = false;
        this.ak47Model5 = false;
    }

    tulisanDanBooleanAk47Model2() {
        this.tulisanAk47Model1.style.display = "none";
        this.tulisanAk47Model2.style.display = "block";
        this.tulisanAk47Model3.style.display = "none";
        this.tulisanAk47Model4.style.display = "none";
        this.tulisanAk47Model5.style.display = "none";
        this.ak47Model1 = false;
        this.ak47Model2 = true;
        this.ak47Model3 = false;
        this.ak47Model4 = false;
        this.ak47Model5 = false;
    }

    tulisanDanBooleanAk47Model3() {
        this.tulisanAk47Model1.style.display = "none";
        this.tulisanAk47Model2.style.display = "none";
        this.tulisanAk47Model3.style.display = "block";
        this.tulisanAk47Model4.style.display = "none";
        this.tulisanAk47Model5.style.display = "none";
        this.ak47Model1 = false;
        this.ak47Model2 = false;
        this.ak47Model3 = true;
        this.ak47Model4 = false;
        this.ak47Model5 = false;
    }

    tulisanDanBooleanAk47Model4() {
        this.tulisanAk47Model1.style.display = "none";
        this.tulisanAk47Model2.style.display = "none";
        this.tulisanAk47Model3.style.display = "none";
        this.tulisanAk47Model4.style.display = "block";
        this.tulisanAk47Model5.style.display = "none";
        this.ak47Model1 = false;
        this.ak47Model2 = false;
        this.ak47Model3 = false;
        this.ak47Model4 = true;
        this.ak47Model5 = false;
    }

    tulisanDanBooleanAk47Model5() {
        this.tulisanAk47Model1.style.display = "none";
        this.tulisanAk47Model2.style.display = "none";
        this.tulisanAk47Model3.style.display = "none";
        this.tulisanAk47Model4.style.display = "none";
        this.tulisanAk47Model5.style.display = "block";
        this.ak47Model1 = false;
        this.ak47Model2 = false;
        this.ak47Model3 = false;
        this.ak47Model4 = false;
        this.ak47Model5 = true;
    }

    addListeners() {
        this.kananButton.addEventListener("click", () => {
            if (this.ak47Model1) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Depan1.fbx");
                this.tulisanDanBooleanAk47Model2();   
            } 
            else if (this.ak47Model2) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Depan2.fbx");
                this.tulisanDanBooleanAk47Model3(); 
            }
            else if (this.ak47Model3) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Scope1.fbx");
                this.tulisanDanBooleanAk47Model4();  
            }
            else if (this.ak47Model4) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Lengkap.fbx");
                this.tulisanDanBooleanAk47Model5();  
            }
            else if (this.ak47Model5) {
                this.editModel("../assets/3d/AK-47.fbx");
                this.tulisanDanBooleanAk47Model1(); 
            }
        });

        this.kiriButton.addEventListener("click", () => {
            if (this.ak47Model1) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Lengkap.fbx");
                this.tulisanDanBooleanAk47Model5(); 
            } 
            else if (this.ak47Model2) {
                this.editModel("../assets/3d/AK-47.fbx");
                this.tulisanDanBooleanAk47Model1(); 
            }
            else if (this.ak47Model3) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Depan1.fbx");
                this.tulisanDanBooleanAk47Model2();  
            }
            else if (this.ak47Model4) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Depan2.fbx");
                this.tulisanDanBooleanAk47Model3(); 
            }
            else if (this.ak47Model5) {
                this.editModel("../assets/3d/AK-47_Aksesoris_Scope1.fbx");
                this.tulisanDanBooleanAk47Model4(); 
            }
        });

        this.beliButton.addEventListener("click", () => {
            if (this.ak47Model1) {
                window.location.href = "../form/ak-47/form_ak-47_basic.html";
            }
            else if (this.ak47Model2) {
                window.location.href = "../form/ak-47/form_ak-47_silencer.html";
            }
            else if (this.ak47Model3) {
                window.location.href = "../form/ak-47/form_ak-47_light.html";
            }
            else if (this.ak47Model4) {
                window.location.href = "../form/ak-47/form_ak-47_scope.html";
            }
            else if (this.ak47Model5) {
                window.location.href = "../form/ak-47/form_ak-47_fullitem.html";
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

const senjataApi_ak47 = new Ak47();
