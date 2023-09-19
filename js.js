const buttonTambah = document.getElementById('btntambah');
const buttonKurang = document.getElementById('btnkurang');
const buttonBagi = document.getElementById('btnbagi');
const buttonKali = document.getElementById('btnkali');
const buttonMod = document.getElementById('btnmod');

const tambah = document.getElementById('tambah')
const kurang = document.getElementById('kurang')
const bagi = document.getElementById('bagi')
const kali = document.getElementById('kali')

buttonTambah.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    
    let checkTambah = datas+datas2
    // let checkKurang = datas-datas2
    // let checkBagi = datas/datas2
    // let checkKali = datas*datas2

    tambah.innerHTML = "ini tambah = " + checkTambah;
    // kurang.innerHTML = "ini kurang = " + checkKurang;
    // bagi.innerHTML = "ini bagi = " + checkBagi;
    // kali.innerHTML = "ini kali = " + checkKali;
})

buttonKurang.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    
    // let checkTambah = datas+datas2
    let checkKurang = datas-datas2
    // let checkBagi = datas/datas2
    // let checkKali = datas*datas2

    // tambah.innerHTML = "ini tambah = " + checkTambah;
    kurang.innerHTML = "ini kurang = " + checkKurang;
    // bagi.innerHTML = "ini bagi = " + checkBagi;
    // kali.innerHTML = "ini kali = " + checkKali;
})

buttonBagi.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    
    // let checkTambah = datas+datas2
    // let checkKurang = datas-datas2
    let checkBagi = datas/datas2
    // let checkKali = datas*datas2

    // tambah.innerHTML = "ini tambah = " + checkTambah;
    // kurang.innerHTML = "ini kurang = " + checkKurang;
    bagi.innerHTML = "ini bagi = " + checkBagi;
    // kali.innerHTML = "ini kali = " + checkKali;
})

buttonKali.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    
    // let checkTambah = datas+datas2
    // let checkKurang = datas-datas2
    // let checkBagi = datas/datas2
    let checkKali = datas*datas2

    // tambah.innerHTML = "ini tambah = " + checkTambah;
    // kurang.innerHTML = "ini kurang = " + checkKurang;
    // bagi.innerHTML = "ini bagi = " + checkBagi;
    kali.innerHTML = "ini kali = " + checkKali;
})

buttonMod.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    
    // let checkTambah = datas+datas2
    // let checkKurang = datas-datas2
    // let checkBagi = datas/datas2
    // let checkKali = datas*datas2
    let checkMod = datas%datas2

    // tambah.innerHTML = "ini tambah = " + checkTambah;
    // kurang.innerHTML = "ini kurang = " + checkKurang;
    // bagi.innerHTML = "ini bagi = " + checkBagi;
    // kali.innerHTML = "ini kali = " + checkKali;
    mod.innerHTML = "ini modulus = " + checkMod;
})
