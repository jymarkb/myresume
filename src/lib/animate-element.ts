import { animateSpan, animationGroups, descInfoText } from "./static-data";
import { AnimateType } from "./utils";

export const AnimateElement = ({ target, entry }: AnimateType) => {
    for (const group of animationGroups) {
        if (group.classes.some(cls => target.classList.contains(cls))) {
            target.classList.toggle(group.animation, entry.isIntersecting);
        }
    }
};

export const AnimateInfo = ({ target, entry }: AnimateType) => {
    if (!target || !entry.isIntersecting) return;

    const fragment = document.createDocumentFragment();
    const words = descInfoText.split(" ");

    words.forEach((word, index) => {
        const span = document.createElement("span");
        span.textContent = `${word} `;
        if (animateSpan.includes(word)) {
            span.classList.add("span-text");
        }
        span.style.animationDelay = `${index * 0.15}s`;
        fragment.appendChild(span);
    });

    target.innerHTML = ""; // Clear once
    target.appendChild(fragment);
};
