import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import GeneralClass from "./general_class.js"; 

class SenjataApi extends GeneralClass {
    constructor() {
        super()
        this.tulisanAk47 = document.getElementById("ak-47");
        this.tulisanM16 = document.getElementById("m16");
        this.tulisanHkg3 = document.getElementById("hkg3");
        this.editButton = document.getElementById("button_edit");

        this.ak47 = true;
        this.m16 = false;
        this.hkg3 = false;
        this.loader = new FBXLoader();
        this.WarnaDanModelDitampilan = "";

        this.threejs();
        this.editModel(this.warnaDanModelFile);
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

    tulisanDanBooleanAk47() {
        this.tulisanAk47.style.display = "block";
        this.tulisanM16.style.display = "none";
        this.tulisanHkg3.style.display = "none";
        this.ak47 = true;
        this.m16 = false;
        this.kg3 = false;
    }

    tulisanDanBooleanM16() {
        this.tulisanAk47.style.display = "none";
        this.tulisanM16.style.display = "block";
        this.tulisanHkg3.style.display = "none";
        this.ak47 = false;
        this.m16 = true;
        this.hkg3 = false;
    }

    tulisanDanBooleanHkg3() {
        this.tulisanAk47.style.display = "none";
        this.tulisanM16.style.display = "none";
        this.tulisanHkg3.style.display = "block";
        this.ak47 = false;
        this.m16 = false;
        this.hkg3 = true;
    }

    addListeners() {
        // Menggunakan event "DOMContentLoaded" untuk memastikan bahwa DOM telah dimuat
        document.addEventListener('DOMContentLoaded', () => {
            super.addListeners();

            this.editButton.addEventListener("click", () => {
                if (this.ak47) {
                    window.location.href = "../edit/edit_ak-47.html";
                } else if (this.m16) {
                    window.location.href = "../edit/edit_m16.html";
                } else if (this.hkg3) {
                    window.location.href = "../edit/edit_hkg3.html";
                }
            });
        });
    }

}

const senjataApi = new SenjataApi();

function animasiLoop() {
    requestAnimationFrame(animasiLoop);

    if (senjataApi.WarnaDanModelDitampilan) {
        senjataApi.WarnaDanModelDitampilan.rotation.y += 0.005;
    }
    senjataApi.renderer.render(senjataApi.scene, senjataApi.camera);
}

animasiLoop();