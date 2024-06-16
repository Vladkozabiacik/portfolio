const root = document.documentElement;
const panelElementsDisplayed = getComputedStyle(root).getPropertyValue("--panel-elements-displayed");
const panelContent = document.querySelector("ul.panel-content");

root.style.setProperty("--panel-elements", panelContent.children.length);

for (let i = 0; i < panelElementsDisplayed; i++) {
  panelContent.appendChild(panelContent.children[i].cloneNode(true));
}

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.querySelector('.nav-container');
  const grayDot = document.querySelector('.gray-dot');

  const crystals = [
    document.getElementById('crystal0'),
    document.getElementById('crystal1'),
    document.getElementById('crystal2'),
    document.getElementById('crystal3'),
    document.getElementById('crystal4')
  ];

  let isExpanded = false;

  navContainer.addEventListener('click', () => {
    if (isExpanded) {
      navContainer.classList.remove('active');
      grayDot.classList.remove('active');
      crystals.forEach((crystal, index) => {
        crystal.classList.remove(`rotate${index}`);
      });
    } else {
      navContainer.classList.add('active');
      grayDot.classList.add('active');
      crystals.forEach((crystal, index) => {
        crystal.classList.add(`rotate${index}`);
      });
    }
    isExpanded = !isExpanded;
  });
});
