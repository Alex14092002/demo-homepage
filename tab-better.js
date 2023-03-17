const buttons = document.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function toggleAttribute(elements, attribute, value) {
    elements.forEach((element) => {
        element.setAttribute(attribute, value);
    });
}

function showTabContent(e) {
    const id = this.id;

    toggleAttribute(tabPanels, "hidden", true);
    toggleAttribute(buttons, "aria-selected", false);
    toggleAttribute([this], "aria-selected", true);
    const tabPanel = tabPanels.find(
        (panel) => panel.getAttribute("aria-labelledby") === id
    );
    tabPanel.hidden = false;
}

buttons.forEach((button) => {
    button.addEventListener("click", showTabContent);
});
