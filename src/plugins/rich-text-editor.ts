import { Plugin, PluginOptions } from '../plugin'
import { ShaclPropertyTemplate } from '../property-template'
import { Term } from '@rdfjs/types'
import css from './rich-text-editor.css?raw'

export class RichTextEditorPlugin extends Plugin {
    constructor(options: PluginOptions) {
        super(options, css)
    }

    createEditor(template: ShaclPropertyTemplate, value?: Term): HTMLElement {
        const required = template.minCount !== undefined && template.minCount > 0
        return template.config.theme.createRichTextEditor(template.label, value || null, required, template)
    }
}
