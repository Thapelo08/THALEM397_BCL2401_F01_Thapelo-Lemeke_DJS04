class BookPreview extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const { author, id, image, title } = this.dataset;

        this.innerHTML = `
            <button class="preview" data-preview="${id}">
                <img class="preview__image" src="${image}" />
                <div class="preview__info">
                    <h3 class="preview__title">${title}</h3>
                    <div class="preview__author">${author[author]}</div>
                </div>
            </button>
        `;
    }
}

customElements.define('book-preview', BookPreview);
