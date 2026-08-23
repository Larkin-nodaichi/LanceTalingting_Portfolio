const modal = document.getElementById("mediaModal");
const modalImage = document.getElementById("modalImage");
const modalVideo = document.getElementById("modalVideo");
const modalPdf = document.getElementById("modalPdf");
const modalTitle = document.getElementById("modalTitle");
const closeButton = document.querySelector(".modal-close");

function openModal(type, src, title) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalImage.style.display = "none";
  modalVideo.style.display = "none";
  modalPdf.style.display = "none";
  modalVideo.pause();
  modalTitle.textContent = title || "";

  if (type === "image") {
    modalImage.src = src;
    modalImage.style.display = "block";
  } else if (type === "video") {
    modalVideo.src = src;
    modalVideo.style.display = "block";
    modalVideo.play().catch(() => {});
  } else if (type === "pdf") {
    modalPdf.src = src;
    modalPdf.style.display = "block";
  }
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
  modalVideo.pause();
  modalVideo.src = "";
  modalPdf.src = "";
}

document.querySelectorAll("[data-type]").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.type, card.dataset.src, card.dataset.title);
  });
});

closeButton.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
