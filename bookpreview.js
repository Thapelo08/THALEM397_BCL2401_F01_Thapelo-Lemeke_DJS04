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

// Function to create book previews
const createBookPreview = (book) => {
    const { author, id, image, title } = book;
    const preview = document.createElement('book-preview');
    preview.dataset.id = id;
    preview.dataset.author = author;
    preview.dataset.image = image;
    preview.dataset.title = title;
    return preview;
};

