export const navigateToSection = (text) => {
  const anchor = document.querySelector(`#${text.replace(" ", "-")}`);
  return anchor.scrollIntoView({ behavior: "smooth", block: "center" });
};
