export default function useDarkMode() {
  const currentMode = () => {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  };

  const changeMode = () => {
    document.documentElement.classList.contains("dark")
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  };

  return {
    currentMode,
    changeMode
  };
}
