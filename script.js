const searchInput = document.getElementById("searchInput");
const videoCards = document.querySelectorAll(".video-card");

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.toLowerCase();
  videoCards.forEach((card) => {
    const title = card.dataset.title.toLowerCase();
    if (title.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


let tags = document.querySelectorAll(".tag");
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    let tagText = tag.textContent.toLowerCase();

    tags.forEach((t) => t.classList.remove("dark"));
    tag.classList.add("dark");

    videoCards.forEach((card) => {
      const title = card.dataset.title.toLowerCase();
      if (tagText === "all" || title.includes(tagText)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
