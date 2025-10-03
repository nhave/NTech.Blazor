export function Initialize(elementId, dotNetHelper) {
    let dropdownEl = document.getElementById(elementId);
    if (dropdownEl == null)
        return;

    dropdownEl.addEventListener('hide.bs.dropdown', function () {
        dotNetHelper.invokeMethodAsync('bsHideDropdown');
    });
    dropdownEl.addEventListener('hidden.bs.dropdown', function () {
        dotNetHelper.invokeMethodAsync('bsHiddenDropdown');
    });
    dropdownEl.addEventListener('show.bs.dropdown', function () {
        dotNetHelper.invokeMethodAsync('bsShowDropdown');
    });
    dropdownEl.addEventListener('shown.bs.dropdown', function () {
        const input = dropdownEl.querySelector("input");
        if (input) {
            input.focus();
        }
        const ul = dropdownEl.querySelector(".select-content");
        ul.scrollTop = 0;
        dotNetHelper.invokeMethodAsync('bsShownDropdown');
    });

    bootstrap?.Dropdown?.getOrCreateInstance(dropdownEl);
}

export function Show(elementId) {
    let dropdownEl = document.getElementById(elementId);
    if (dropdownEl != null)
        bootstrap?.Dropdown?.getOrCreateInstance(dropdownEl)?.show();
}

export function Hide(elementId) {
    let dropdownEl = document.getElementById(elementId);
    if (dropdownEl != null)
        bootstrap?.Dropdown?.getOrCreateInstance(dropdownEl)?.hide();
}

export function Toggle(elementId) {
    let dropdownEl = document.getElementById(elementId);
    if (dropdownEl != null)
        bootstrap?.Dropdown?.getOrCreateInstance(dropdownEl)?.toggle();
}

export function Update(elementId) {
    let dropdownEl = document.getElementById(elementId);
    if (dropdownEl != null)
        bootstrap?.Dropdown?.getOrCreateInstance(dropdownEl)?.update();
}