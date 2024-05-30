export default function navigate(sectionId: string) {
  const section = document.getElementById(sectionId);

  if (section) {
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    })
  }
}