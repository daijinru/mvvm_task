class CreateElement{
    constructor(elementName) {
        this.elementName = elementName
        this.element = ''
    }

    create() {
        this.element = document.createElement(this.elementName)
        return this
    }

    addClass(className) {
        this.element.classList.add(className)
        return this
    }

    append(element) {
        this.element.appendChild(element)
        return this
    }

    insertHTML(htmlText) {
        this.element.innerHTML = htmlText
        return this
    }

    build() {
        return this.element
    }
}

export default CreateElement