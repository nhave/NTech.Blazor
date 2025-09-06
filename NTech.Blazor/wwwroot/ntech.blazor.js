window.theme = {
    changeTheme: function (theme) {
        localStorage.setItem("colorTheme", theme);
        window.theme.updateTheme();
    },
    updateTheme: function () {
        const themeSelectIcon = document.getElementById("themeSelectIcon");

        if (themeSelectIcon) {
            themeSelectIcon.classList.remove("bi-circle-half", "bi-sun-fill", "bi-moon-stars-fill", "bi-lightbulb-off-fill");

            const themeSelectLight = document.getElementById("themeSelectLight");
            const themeSelectDark = document.getElementById("themeSelectDark");
            const themeSelectAuto = document.getElementById("themeSelectAuto");
            const themeSelectOled = document.getElementById("themeSelectOled");

            themeSelectLight.classList.remove("active");
            themeSelectDark.classList.remove("active");
            themeSelectAuto.classList.remove("active");
            themeSelectOled.classList.remove("active");
        }

        const theme = localStorage.getItem("colorTheme");

        if (theme == "light") {
            document.querySelector("html").setAttribute("data-bs-theme", "light")

            if (themeSelectIcon) {
                themeSelectIcon.classList.add("bi-sun-fill");
                themeSelectLight.classList.add("active");
            }
        }
        else if (theme == "dark") {
            document.querySelector("html").setAttribute("data-bs-theme", "dark")

            if (themeSelectIcon) {
                themeSelectIcon.classList.add("bi-moon-stars-fill");
                themeSelectDark.classList.add("active");
            }
        }
        else if (theme == "oled") {
            document.querySelector("html").setAttribute("data-bs-theme", "oled")

            if (themeSelectIcon) {
                themeSelectIcon.classList.add("bi-lightbulb-off-fill");
                themeSelectOled.classList.add("active");
            }
        }
        else {
            document.querySelector("html").setAttribute("data-bs-theme",
                window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

            if (themeSelectIcon) {
                themeSelectIcon.classList.add("bi-circle-half");
                themeSelectAuto.classList.add("active");
            }
        }
    }
}

window.cookies = {
    setCookie: function (cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie: function (cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}

window.navbar = {
    closeCollapse: function (id) {
        const bsCollapse = new bootstrap.Collapse(`#${id}`, {
            toggle: false
        });
        bsCollapse.hide();
    },
    openCollapse: function (id) {
        const bsCollapse = new bootstrap.Collapse(`#${id}`, {
            toggle: false
        });
        bsCollapse.show();
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', window.theme.updateTheme);
window.theme.updateTheme();
