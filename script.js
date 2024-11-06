window.onload = function () {
  var iframe = document.getElementById("video-iframe");
  iframe.src += "&autoplay=1"; // هذا سيشغل الفيديو تلقائيًا بمجرد تحميل الصفحة
};

function hide() {
  const button = document.querySelector(".btn");
  const paragraph = document.querySelector(".paragraph");

  button.addEventListener("click", function () {
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  });
}
hide();

document.addEventListener("DOMContentLoaded", function () {
  var questions = document.querySelectorAll(".question");
  questions.forEach(function (question) {
    question.addEventListener("click", function () {
      var answerId = question.getAttribute("data-question");
      var answer = document.querySelector(answerId);
      var allAnswers = document.querySelectorAll(".answer");

      if (answer.style.display === "none" || answer.style.display === "") {
        allAnswers.forEach(function (a) {
          a.style.display = "none";
        });
        answer.style.display = "block";
      } else {
        answer.style.display = "none";
      }
    });
  });
});
