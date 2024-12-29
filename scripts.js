window.onload = function() {
    // Stage 1: Amplop dan tombol pertama
    document.getElementById("btnStage1").addEventListener("click", function() {
        document.getElementById("stage1").classList.remove("active");
        document.getElementById("stage2").classList.add("active");
    });

    // Stage 2: Pesan animasi dan tombol kedua
    document.getElementById("btnStage2").addEventListener("click", function() {
        document.getElementById("stage2").classList.remove("active");
        document.getElementById("stage3").classList.add("active");
    });

    // Stage 3: Foto dan pesan animasi, tombol ketiga
    document.getElementById("btnStage3").addEventListener("click", function() {
        document.getElementById("stage3").classList.remove("active");
        document.getElementById("stage4").classList.add("active");
    });

    // Stage 4: Foto jatuh dan pesan animasi, tombol keempat
    document.getElementById("btnStage4").addEventListener("click", function() {
        document.getElementById("stage4").classList.remove("active");
        document.getElementById("stage5").classList.add("active");
    });
};
