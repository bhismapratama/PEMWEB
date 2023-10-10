// function infoFilmKak() {
//     // nah ini buat apiKeynya (soalnya ga open source)
//     const apiKey = '99190b38';
//     const datas = new XMLHttpRequest();

//     // nah ini buat dapetin datanya (pakai method get)
//     datas.open(
//         'GET',
//         `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`,
//         true
//     );

//     // klo ini buat load functionnya (coba lihat di button, kan ada onclick tuhh)
//     datas.onload = function () {
//         if (datas.status >= 200 && datas.status < 400) {
//             const response = JSON.parse(datas.responseText);
//             console.log(response);
//         } else {
//             console.error('Error Mazzeh');
//             throw new Error;
//         }
//     };

//     datas.onerror = function () {
//         console.error('Error Mazzeh');
//         throw new Error;
//     };

//     datas.send();
// }