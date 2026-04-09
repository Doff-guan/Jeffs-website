import handleMenu from "./modules/handleMenu.js";
import horizontalScroll from "./modules/horizontalScroll.js";
import hoverScaleGrey from "./modules/hoverScaleGrey.js";
import handleTransitionMenu from "./modules/handleTransitionMenu.js";
import pageTransition from "./modules/pageTransition.js";
import Slider from "./modules/skewSlider.js";
import SplittingFunction from "./modules/Splitting.js";
import handleLoadLottie from "./modules/handleLoadLottie.js";
import handleHoverSlider from "./modules/handleHoverSlider.js";
import handleAnimateWorks from "./modules/handleAnimateWorks.js";
import handleAnimateAbout from "./modules/handleAnimateAbout.js";
import handleAnimateContact from "./modules/handleAnimateContact.js";
import handleAnimatePlayground from "./modules/handleAnimatePlayground.js";
import handleAnimateWorksDetail from "./modules/handleAnimateWorksDetail.js";
import handleSplitTextWorksDetail from "./modules/handleSplitTextWorksDetail.js";


const lazySizesConfig = lazySizes.cfg;
lazySizesConfig.init = false;
// For load js global all page, don't need reload when page transition
export const initJsGlobal = () => {
  gsap.config({ nullTargetWarn: false });
  gsap.to("body", 0, { css: { visibility: "visible" } });
  function initWindowInnerheight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  handleMenu();
  initWindowInnerheight();
  SplittingFunction();
  pageTransition();
  handleSplitTextWorksDetail();
  handleAnimateAbout();
  handleAnimateWorks();
  handleAnimateContact();
  handleAnimatePlayground();
  handleAnimateWorksDetail();
};

export const initJsModule = () => {

  handleTransitionMenu();
  const slider = document.querySelector(".slider");
  let mql = window.matchMedia("(min-width: 1024px)").matches;
  if (mql && slider) {
    new Slider().init();
  }
  if (slider) {
    hoverScaleGrey();
    handleHoverSlider();
  }
  horizontalScroll();
  handleLoadLottie();
};

window.addEventListener("DOMContentLoaded", () => {
  initJsGlobal();
  initJsModule();
});

window.addEventListener('load', lazySizes.init);