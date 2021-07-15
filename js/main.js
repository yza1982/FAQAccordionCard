const secQ = document.getElementsByClassName("sec-q");

function addOnClick() {
  if (secQ.length > 0) {
    for (let i = 0; i < secQ.length; i++) {
      secQ[i].onclick = () => {
        let q_el = secQ[i].getElementsByTagName("h3")[0];
        let img_el = secQ[i].getElementsByTagName("img")[0];
        let sec_a = secQ[i].parentElement.getElementsByClassName("sec-a")[0];

        if (sec_a.style.visibility !== "visible") {
          q_el.style.fontWeight = "700";
          img_el.style.transform = "rotateZ(180deg)";

          sec_a.style.visibility = "visible";
          sec_a.style.height = "20px";
        } else {
          q_el.style.fontWeight = "400";
          img_el.style.transform = "rotateZ(0)";

          sec_a.style.visibility = "hidden";
          sec_a.style.height = "0";
        }
      };
    }
  }
}

addOnClick();
