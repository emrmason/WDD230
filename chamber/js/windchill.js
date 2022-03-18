
let t = parseFloat(document.querySelector('#temp'));
let s = parseFloat(document.querySelector('#speed'));
let wc = '';

if (t <= 70 && s > 1) {
    console.log("calculate");
    // wc = parseFloat(35.74 + (0.6215 * t) - (35.75 * Math.pow(s,0.16)) + (0.4275 * t * Math.pow(s,0.16))).toFixed(2);
    // document.getElementById('chill').innerHTML = `${wc} &#176;F`;
}
else {
    document.getElementById('chill').innerHTML= 'N/A';
 }
