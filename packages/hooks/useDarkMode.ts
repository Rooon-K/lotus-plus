export default function useDarkMode() {
  const theme = document.documentElement.getAttribute("class") === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("class", theme);
}
