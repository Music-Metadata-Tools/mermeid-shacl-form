import { ShaclForm as FormBase } from "./form"
import { MermeidTheme } from "./themes/mermeid"

export * from './exports'

export class ShaclForm extends FormBase {
    constructor() {
        super(new MermeidTheme())
    }
}

window.customElements.define('shacl-form', ShaclForm)
