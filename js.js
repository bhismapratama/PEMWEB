const buttonTambah = document.getElementById('btntambah');
const buttonKurang = document.getElementById('btnkurang');
const buttonBagi = document.getElementById('btnbagi');
const buttonKali = document.getElementById('btnkali');
const buttonMod = document.getElementById('btnmod');

const buttonAll = document.getElementById('btnall');
const buttonClear = document.getElementById('btnclear');

const tambah = document.getElementById('tambah')
const kurang = document.getElementById('kurang')
const bagi = document.getElementById('bagi')
const kali = document.getElementById('kali')

buttonTambah.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    let checkTambah = datas+datas2
    tambah.innerHTML = "ini tambah = " + checkTambah;
})

buttonKurang.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    let checkKurang = datas-datas2
    kurang.innerHTML = "ini kurang = " + checkKurang;
})

buttonBagi.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    let checkBagi = datas/datas2
    bagi.innerHTML = "ini bagi = " + checkBagi;
})

buttonKali.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    let checkKali = datas*datas2
    kali.innerHTML = "ini kali = " + checkKali;
})

buttonMod.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    let checkMod = datas%datas2
    mod.innerHTML = "ini modulus = " + checkMod;
})


buttonAll.addEventListener('click', () => {
    let datas = Number(document.getElementById('input1').value);
    let datas2 = Number(document.getElementById('input2').value);
    let checkTambah = datas+datas2
    let checkKurang = datas-datas2
    let checkBagi = datas/datas2
    let checkKali = datas*datas2
    let checkMod = datas%datas2

    tambah.innerHTML = "ini tambah = " + checkTambah;
    kurang.innerHTML = "ini kurang = " + checkKurang;
    bagi.innerHTML = "ini bagi = " + checkBagi;
    kali.innerHTML = "ini kali = " + checkKali;
    mod.innerHTML = "ini modulus = " + checkMod;
})

buttonClear.addEventListener('click', () => {
    tambah.innerHTML = "ini tambah = terhapus yak";
    kurang.innerHTML = "ini kurang = terhapus yak";
    bagi.innerHTML = "ini bagi = terhapus yak";
    kali.innerHTML = "ini kali = terhapus yak";
    mod.innerHTML = "ini modulus = terhapus yak";
})