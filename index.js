function getEle(prefix, elementId, suffix) {
  let val = document.getElementById(elementId).value;
  if (val) return prefix + val + suffix;
  else return "";
}

function updateText() {
  let str = "";
  str += getEle("RBC: ", "rbc", "x10^9/l; ");
  str += getEle("HGB: ", "hgb", "g/dl; ");
  str += getEle("MCV: ", "mcv", "fl; ");
  str += getEle("MCH: ", "mch", "pg; ");
  str += getEle("MCHC: ", "mchc", "g/dl; ");
  str += getEle("HCT: ", "hct", "%; ");
  str += getEle("LEU: ", "leu", "x10^9; ");
  str += getEle("LYM: ", "lym", "x10^9; ");
  str += getEle("EOS: ", "eos", "x10^9; ");
  str += getEle("NEU: ", "neu", "x10^9; ");
  str += getEle("PLT: ", "plt", "x10^9; ");
  str += getEle("\nCRB: ", "crb", "mg/l; ");
  copy.value = str;
}

document.addEventListener("DOMContentLoaded", () => {
  var copy = document.getElementById("copy");
  let tags = document.getElementsByTagName("INPUT");
  for (let i = 0; i != tags.length; i++) {
    ["change", "keyup"].forEach((evt) => {
      tags[i].addEventListener(evt, (e) => {
        e.target.value = e.target.value.replace(/[^0-9,.]/, "");
        e.target.value = e.target.value.replace(".", ",");
        updateText();
      });
    });
  }
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(copy.value);
    copy.select();
    document.getElementById("custom-tooltip").style.display = "inline";
    setTimeout(function () {
      document.getElementById("custom-tooltip").style.display = "none";
    }, 500);
  });
});
