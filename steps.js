const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const productFinderOptions = document.querySelectorAll(".product-finder_option");
const form = document.getElementById('form');

let optionsArray = [];
let fitOptionsArray = [];
let fabricOptionsArray = [];
let cuffOptionsArray = [];
let formStepsNum = 0;
let queryString = "";
let fitOptionQueryString = "";
let fabricOptionsQueryString = "";
let cuffOptionsQueryString = "";

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
    optionsArray = [];
    console.log(queryString);
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    optionsArray = [];
  });
});

const submitForm = (event) => {
  newURL = "combinacion.html" + queryString;
  window.location.href = newURL;
  console.log(newURL);
  event.preventDefault();
};

form.addEventListener('submit', submitForm);

nextBtns.forEach((opt) => {
  const removeAtIndex = (arr, index) => {
    const copy = [...arr];
    copy.splice(index, 1);
    return copy;
  };

  const toggle = (arr, item, getValue = (item) => item) => {
    const index = arr.findIndex((i) => getValue(i) === getValue(item));
    if (index === -1) return [...arr, item];
    return removeAtIndex(arr, index);
  };
  
  opt.addEventListener("click", (event) => {
    event.preventDefault();
    if (formStepsNum == 1) {
      fitOptionsArray = toggle(fitOptionsArray, opt.dataset.id);
      fitOptionQueryString = "?uff_bv7aub_tags=" + Object.keys(fitOptionsArray)
      .map((key) => fitOptionsArray[key])
      .join("_usf_");
    };
    if (formStepsNum == 2) {
      fabricOptionsArray = toggle(fabricOptionsArray, opt.dataset.id);
      fabricOptionsQueryString = "&uff_4czacp_tags=" + Object.keys(fabricOptionsArray)
      .map((key) => fabricOptionsArray[key])
      .join("_usf_");
    };
    if (formStepsNum == 3) {
      cuffOptionsArray = toggle(cuffOptionsArray, opt.dataset.id);
      cuffOptionsQueryString = "&uff_9ulvzd_tags=" + Object.keys(cuffOptionsArray)
      .map((key) => cuffOptionsArray[key])
      .join("_usf_");
    };
    queryString = fitOptionQueryString + fabricOptionsQueryString + cuffOptionsQueryString;
    console.log(queryString);
    opt.classList.toggle("product-finder_option-active");
  });
});

const updateFormSteps = () => {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
};

const updateProgressbar = () => {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
};