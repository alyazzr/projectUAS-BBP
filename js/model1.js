import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

const input = document.getElementById("input");
const buttonCari = document.getElementById("button_cari");
const viewerContainer = document.getElementById("viewer");
const merahButton = document.getElementById("merah");
const hijauButton = document.getElementById("hijau");
const biruButton = document.getElementById("biru");
const mobilTauri = document.getElementById("mobil_tauri");
const mobilMclaren = document.getElementById("mobil_mclaren");
const mobilCivic = document.getElementById("mobil_civic");
const kananButton = document.getElementById("kanan");
const kiriButton = document.getElementById("kiri");
const buttonBeli = document.getElementById("button_beli");

let tauri = true;
let mclaren = false;
let civic = false;

const loader = new FBXLoader();
let WarnaDanModelDitampilan;
let warnaDanModelFile = "../assets/3d/Ak-47.fbx";

function gantiWarnaDanModel(namaFile) {
    warnaDanModelFile = namaFile;
    if (WarnaDanModelDitampilan) {
        scene.remove(WarnaDanModelDitampilan);
        console.log("telah diganti");
      }
      loader.load(warnaDanModelFile, function(fbx)  {
        WarnaDanModelDitampilan = fbx;
        scene.add(WarnaDanModelDitampilan);
    });
}
function tulisanDanBooleanTauri() {
    mobilTauri.style.display = "block";
    mobilMclaren.style.display = "none";
    mobilCivic.style.display = "none";
    tauri = true;
    mclaren = false;
    civic = false;
}
function tulisanDanBooleanMclaren() {
    mobilTauri.style.display = "none";
    mobilMclaren.style.display = "block";
    mobilCivic.style.display = "none";
    tauri = false;
    mclaren = true;
    civic = false;
}
function tulisanDanBooleanCivic() {
    mobilTauri.style.display = "none";
    mobilMclaren.style.display = "none";
    mobilCivic.style.display = "block";
    tauri = false;
    mclaren = false;
    civic = true;
}
function cariTekanEnterAtauButton() {
    if (input.value.toLowerCase() == "tauri" || 
    input.value.toLowerCase() == "alphatauri" ) {
        gantiWarnaDanModel("../assets/3d/Ak-47_Aksesoris_Scope1.fbx");
        tulisanDanBooleanTauri();
    }
    else if (input.value.toLowerCase() == "mclaren senna gtr" || 
    input.value.toLowerCase() == "mclaren") {
        gantiWarnaDanModel("../assets/3d/Mclaren_Senna_GTR_Merah.fbx");
        tulisanDanBooleanMclaren();
    }
    else if (input.value.toLowerCase() == "civic" || 
    input.value.toLowerCase() == "civic type r") {
        gantiWarnaDanModel("../assets/3d/Civic_Type_R_Merah.fbx");
        tulisanDanBooleanCivic();
    }
}

buttonBeli.addEventListener("click", function(){
    if (tauri) {
        window.location.href = "../form/form_tauri.html";
    }
    else if (mclaren) {
        window.location.href = "../form/form_mclaren.html";
    }
    else if (civic) {
        window.location.href = "../form/form_civic.html";
    }
})
buttonCari.addEventListener("click", function(){
    cariTekanEnterAtauButton();
})
window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        cariTekanEnterAtauButton();
        console.log('enter ditekan');    
    }
});
kananButton.addEventListener("click", function() {
    if (tauri) {
    gantiWarnaDanModel("../assets/3d/Mclaren_Senna_GTR_Merah.fbx");
    tulisanDanBooleanMclaren();
    } 
    else if (mclaren) {
    gantiWarnaDanModel("../assets/3d/Civic_Type_R_Merah.fbx");
    tulisanDanBooleanCivic();
    }
    else if (civic) {
    gantiWarnaDanModel("../assets/3d/Ak-47_Aksesoris_Scope1.fbx");
    tulisanDanBooleanTauri();
    }
});
kiriButton.addEventListener("click", function() {
    if (tauri) {
    gantiWarnaDanModel("../assets/3d/Civic_Type_R_Merah.fbx");
    tulisanDanBooleanCivic();
    } 
    else if (civic) {
    gantiWarnaDanModel("../assets/3d/Mclaren_Senna_GTR_Merah.fbx");
    tulisanDanBooleanMclaren();
    }
    else if (mclaren) {
    gantiWarnaDanModel("../assets/3d/Ak-47_Aksesoris_Scope1.fbx");
    tulisanDanBooleanTauri();
    }
});
merahButton.addEventListener("click", function() {
    if (tauri) {
    gantiWarnaDanModel("../assets/3d/Ak-47_Aksesoris_Scope1.fbx");
    } 
    else if (mclaren) {
    gantiWarnaDanModel("../assets/3d/Mclaren_Senna_GTR_Merah.fbx");
    }
    else if (civic) {
    gantiWarnaDanModel("../assets/3d/Civic_Type_R_Merah.fbx");
    }
});
hijauButton.addEventListener("click", function() {
    if (tauri) {
    gantiWarnaDanModel("../assets/3d/AK-47_Aksesoris_Depan1_dan_Aksesoris_Scope1.fbx");
    } 
    else if (mclaren) {
    gantiWarnaDanModel("../assets/3d/Mclaren_Senna_GTR_Hijau.fbx");
    }
    else if (civic) {
    gantiWarnaDanModel("../assets/3d/Civic_Type_R_Hijau.fbx");
    }
});
biruButton.addEventListener("click", function() {
    if (tauri) {
    gantiWarnaDanModel("../assets/3d/AK-47_Aksesoris_Depan2_dan_Aksesoris_Scope1.fbx");
    } 
    else if (mclaren) {
    gantiWarnaDanModel("../assets/3d/Mclaren_Senna_GTR_Biru.fbx");
    }
    else if (civic) {
    gantiWarnaDanModel("../assets/3d/Civic_Type_R_Biru.fbx");
    }
});

// Konfigurasi tampilan viewer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
viewerContainer.appendChild(renderer.domElement);
camera.position.set(0, 50, 600); 
camera.lookAt(0, 0, 0);

loader.load(warnaDanModelFile, function(fbx)  {
    WarnaDanModelDitampilan = fbx;
    scene.add(WarnaDanModelDitampilan);
});

const animate = function() {
    requestAnimationFrame(animate);
    if (WarnaDanModelDitampilan) {
        // WarnaDanModelDitampilan.rotation.x += 0.005;
        WarnaDanModelDitampilan.rotation.y += 0.005;
    }
    renderer.render(scene, camera);
};

animate();
  