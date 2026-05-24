const scheduleButtons = document.querySelectorAll(".schedule-list button");
const messageField = document.querySelector('textarea[name="message"]');
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

scheduleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scheduleButtons.forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");

    const slot = button.dataset.slot;
    if (messageField && slot) {
      messageField.value = `${slot} 일정으로 예약 문의합니다. 인원은 `;
      messageField.focus();
    }
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "문의가 접수되었습니다. 빠르게 가능 시간과 결제 안내를 보내드릴게요.";
  contactForm.reset();
  scheduleButtons.forEach((item) => item.classList.remove("is-selected"));
});
