const takeDown = () => {
  const hide = document.createAttribute("style");
  hide.value = "displey:none ;";
  const payWalls = document.getElementsByClassName("paywall-pop-big");
  payWalls[0].setAttributeNode(hide);
}
setTimeout(takeDown,5000);
