import { ShaclForm as FormBase } from "./form"
import { MermeidTheme } from "./mermeid"
import type { Theme } from './theme'

export * from './exports'
export { MermeidTheme } from './mermeid'

export class ShaclForm extends FormBase {
    constructor() {
        super()
        this.config.theme = new MermeidTheme() as unknown as Theme
    }
}

if (!window.customElements.get('shacl-form')) {
    window.customElements.define('shacl-form', ShaclForm)
}
