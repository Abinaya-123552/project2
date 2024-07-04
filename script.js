document.addEventListener("DOMContentLoaded", function () {
  // Select the navbar link for "About"
  const aboutLink = document.querySelector(".navbar a[href='#about']");

  if (aboutLink) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target element
      const target = document.getElementById("about");

      if (target) {
        // Calculate the offset to stop earlier, e.g., 20 pixels before the section
        const offset = target.offsetTop - 40;

        // Scroll to the target element with the adjusted offset
        window.scrollTo({
          top: offset,
          behavior: "smooth", // Smooth scrolling
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Select the navbar link for "About"
  const aboutLink = document.querySelector(".navbar a[href='#resume']");

  if (aboutLink) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target element
      const target = document.getElementById("resume");

      if (target) {
        // Calculate the offset to stop earlier, e.g., 20 pixels before the section
        const offset = target.offsetTop - 60;

        // Scroll to the target element with the adjusted offset
        window.scrollTo({
          top: offset,
          behavior: "smooth", // Smooth scrolling
        });
      }
    });
  }
});



