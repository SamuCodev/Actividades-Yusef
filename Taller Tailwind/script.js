// ELEMENTOS PRINCIPALES DE NAVEGACIÓN
const menu = document.getElementById("menu");
const buttonTailwind = document.getElementById("button__tailwind");
const themesTailwind = document.getElementById("themes__tailwind");
const tailwindPage = document.getElementById("tailwind__page");

// BOTONES DE VOLVER
const buttonBackMenu = document.getElementById("button__back_menu");
const buttonBackThemes = document.getElementById("button__back_themes");

// BOTONES DE CATEGORÍAS
const btnText = document.getElementById("btn__text");
const btnTamaños = document.getElementById("btn__tamaños");
const btnFlex = document.getElementById("btn__flex");
const btnGrid = document.getElementById("btn__grid");
const btnBorder = document.getElementById("btn__border");
const btnPosition = document.getElementById("btn__position");
const btnTransform = document.getElementById("btn__transform");
const btnTransitions = document.getElementById("btn__transitions");
const btnAnimations = document.getElementById("btn__animations");
const btnFiltros = document.getElementById("btn__filters");
const btnOtros = document.getElementById("btn__otros");

// SECCIONES DE CADA TEMA
const textSection = document.getElementById("text__section");
const tamañosSection = document.getElementById("tamaños__section");
const flexSection = document.getElementById("flex__section");
const gridSection = document.getElementById("grid__section");
const borderSection = document.getElementById("border__section");
const positionSection = document.getElementById("position__section");
const transformSection = document.getElementById("transform__section");
const transitionsSection = document.getElementById("transitions__section");
const animationSection = document.getElementById("animation__section");
const filterSection = document.getElementById("filters__section");
const otherSection = document.getElementById("others__section");

const allSections = [
    textSection,
    tamañosSection,
    flexSection,
    gridSection,
    borderSection,
    positionSection,
    transformSection,
    transitionsSection,
    animationSection,
    filterSection,
    otherSection,
];

// FUNCIÓN PARA MOSTRAR UNA CATEGORÍA ESPECÍFICA
function showCategory(sectionToShow) {
    themesTailwind.classList.add("hidden");
    tailwindPage.classList.remove("hidden");

    // Ocultar todas las secciones antes de mostrar la seleccionada
    allSections.forEach((section) => {
        if (section) section.classList.add("hidden");
    });

    if (sectionToShow) {
        sectionToShow.classList.remove("hidden");
    }
}

// 1. ABRIR MENÚ DE TEMAS DE TAILWIND
if (buttonTailwind) {
    buttonTailwind.addEventListener("click", () => {
        menu.classList.add("hidden");
        themesTailwind.classList.remove("hidden");
    });
}

// 2. VOLVER DEL MENÚ DE TEMAS AL MENÚ PRINCIPAL
if (buttonBackMenu) {
    buttonBackMenu.addEventListener("click", () => {
        themesTailwind.classList.add("hidden");
        menu.classList.remove("hidden");
    });
}

// 3. VOLVER DE LAS CARDS AL MENÚ DE TEMAS
if (buttonBackThemes) {
    buttonBackThemes.addEventListener("click", () => {
        tailwindPage.classList.add("hidden");
        allSections.forEach((section) => {
            if (section) section.classList.add("hidden");
        });
        themesTailwind.classList.remove("hidden");
    });
}

// 4. MAPEO Y ASIGNACIÓN DE EVENTOS A CADA BOTÓN DE CATEGORÍA
const categoryMappings = [
    { btn: btnText, section: textSection },
    { btn: btnTamaños, section: tamañosSection },
    { btn: btnFlex, section: flexSection },
    { btn: btnGrid, section: gridSection },
    { btn: btnBorder, section: borderSection },
    { btn: btnPosition, section: positionSection },
    { btn: btnTransform, section: transformSection },
    { btn: btnTransitions, section: transitionsSection },
    { btn: btnAnimations, section: animationSection },
    { btn: btnFiltros, section: filterSection },
    { btn: btnOtros, section: otherSection },
];

categoryMappings.forEach(({ btn, section }) => {
    if (btn && section) {
        btn.addEventListener("click", () => {
            showCategory(section);
        });
    }
});
