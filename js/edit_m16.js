import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import GeneralClass from "./general_class.js";  

class M16 extends GeneralClass {
    constructor() {
        super()
        this.kananButton = document.getElementById("kanan");
        this.kiriButton = document.getElementById("kiri");
        this.tulisanm16Model1 = document.getElementById("model1");
        this.tulisanm16Model2 = document.getElementById("model2");
        this.tulisanm16Model3 = document.getElementById("model3");
        this.tulisanm16Model4 = document.getElementById("model4");
        this.tulisanm16Model5 = document.getElementById("model5");

        this.m16Model1 = true;
        this.m16Model2 = false;
        this.m16Model3 = false;
        this.m16Model4 = false;
        this.m16Model5 = false;

        this.loader = new FBXLoader();
        this.WarnaDanModelDitampilan = "";
        this.warnaDanModelFile = "../assets/3d/M16.fbx";

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

    tulisanDanBooleanM16Model1() {
        this.tulisanm16Model1.style.display = "block";
        this.tulisanm16Model2.style.display = "none";
        this.tulisanm16Model3.style.display = "none";
        this.tulisanm16Model4.style.display = "none";
        this.tulisanm16Model5.style.display = "none";
        this.m16Model1 = true;
        this.m16Model2 = false;
        this.m16Model3 = false;
        this.m16Model4 = false;
        this.m16Model5 = false;
    }

    tulisanDanBooleanM16Model2() {
        this.tulisanm16Model1.style.display = "none";
        this.tulisanm16Model2.style.display = "block";
        this.tulisanm16Model3.style.display = "none";
        this.tulisanm16Model4.style.display = "none";
        this.tulisanm16Model5.style.display = "none";
        this.m16Model1 = false;
        this.m16Model2 = true;
        this.m16Model3 = false;
        this.m16Model4 = false;
        this.m16Model5 = false;
    }

    tulisanDanBooleanM16Model3() {
        this.tulisanm16Model1.style.display = "none";
        this.tulisanm16Model2.style.display = "none";
        this.tulisanm16Model3.style.display = "block";
        this.tulisanm16Model4.style.display = "none";
        this.tulisanm16Model5.style.display = "none";
        this.m16Model1 = false;
        this.m16Model2 = false;
        this.m16Model3 = true;
        this.m16Model4 = false;
        this.m16Model5 = false;
    }

    tulisanDanBooleanM16Model4() {
        this.tulisanm16Model1.style.display = "none";
        this.tulisanm16Model2.style.display = "none";
        this.tulisanm16Model3.style.display = "none";
        this.tulisanm16Model4.style.display = "block";
        this.tulisanm16Model5.style.display = "none";
        this.m16Model1 = false;
        this.m16Model2 = false;
        this.m16Model3 = false;
        this.m16Model4 = true;
        this.m16Model5 = false;
    }

    tulisanDanBooleanM16Model5() {
        this.tulisanm16Model1.style.display = "none";
        this.tulisanm16Model2.style.display = "none";
        this.tulisanm16Model3.style.display = "none";
        this.tulisanm16Model4.style.display = "none";
        this.tulisanm16Model5.style.display = "block";
        this.m16Model1 = false;
        this.m16Model2 = false;
        this.m16Model3 = false;
        this.m16Model4 = false;
        this.m16Model5 = true;
    }

    addListeners() {
        this.kananButton.addEventListener("click", () => {
            if (this.m16Model1) {
                this.editModel("../assets/3d/M16_Aksesoris_Depan1.fbx");
                this.tulisanDanBooleanM16Model2();   
            } 
            else if (this.m16Model2) {
                this.editModel("../assets/3d/M16_Aksesoris_Depan2.fbx");
                this.tulisanDanBooleanM16Model3(); 
            }
            else if (this.m16Model3) {
                this.editModel("../assets/3d/M16_Aksesoris_Scope1.fbx");
                this.tulisanDanBooleanM16Model4();  
            }
            else if (this.m16Model4) {
                this.editModel("../assets/3d/M16_Aksesoris_Lengkap.fbx");
                this.tulisanDanBooleanM16Model5();  
            }
            else if (this.m16Model5) {
                this.editModel("../assets/3d/M16.fbx");
                this.tulisanDanBooleanM16Model1(); 
            }
        });

        this.kiriButton.addEventListener("click", () => {
            if (this.m16Model1) {
                this.editModel("../assets/3d/M16_Aksesoris_Lengkap.fbx");
                this.tulisanDanBooleanM16Model5(); 
            } 
            else if (this.m16Model2) {
                this.editModel("../assets/3d/M16.fbx");
                this.tulisanDanBooleanM16Model1(); 
            }
            else if (this.m16Model3) {
                this.editModel("../assets/3d/M16_Aksesoris_Depan1.fbx");
                this.tulisanDanBooleanM16Model2();  
            }
            else if (this.m16Model4) {
                this.editModel("../assets/3d/M16_Aksesoris_Depan2.fbx");
                this.tulisanDanBooleanM16Model3(); 
            }
            else if (this.m16Model5) {
                this.editModel("../assets/3d/M16_Aksesoris_Scope1.fbx");
                this.tulisanDanBooleanM16Model4(); 
            }
        });

        this.beliButton.addEventListener("click", () => {
            if (this.m16Model1) {
                window.location.href = "../form/m16/form_m16_basic.html";
            }
            else if (this.m16Model2) {
                window.location.href = "../form/m16/form_m16_silencer.html";
            }
            else if (this.m16Model3) {
                window.location.href = "../form/m16/form_m16_light.html";
            }
            else if (this.m16Model4) {
                window.location.href = "../form/m16/form_m16_scope.html";
            }
            else if (this.m16Model5) {
                window.location.href = "../form/m16/form_m16_fullitem.html";
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

const senjataApi_m16 = new M16();
