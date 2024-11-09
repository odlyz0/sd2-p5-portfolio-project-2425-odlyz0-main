function viewProject(card) {
    const modal = document.getElementById("projectModal");
    const imgSrc = card.querySelector("img").src;
    const title = card.querySelector("h2").textContent;
    const description = card.querySelector("p").textContent;

    modal.style.display = "flex";
    modal.querySelector(".modalImage").innerHTML = `<img src="${imgSrc}" alt="Project Image" style="width: 100%; height: 100%; border-radius: 10px;">`;
    modal.querySelector(".modalTitle").textContent = title;
    modal.querySelector(".modalDescription").textContent = description;
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    modal.style.display = "none";
}

const viewButtons = document.querySelectorAll(".viewBtn");
viewButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const card = event.target.closest(".projectCard");
        viewProject(card);
    });
});
