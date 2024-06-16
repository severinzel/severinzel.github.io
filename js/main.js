const uncheckButton = document.querySelector("#uncheckButton");
const checklist = document.querySelector(".checklist");
const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');

uncheckButton.addEventListener("click", setUnchecked);

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", congratulationAlert);
});

function setUnchecked() {
 checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

function congratulationAlert() {
    const allChecked = [...checkboxes].every((checkbox) => checkbox.checked);
    if (allChecked) {
        alert("Договор проверен, поздравляем!");
    }
}
