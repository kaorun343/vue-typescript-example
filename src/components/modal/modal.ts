"use strict"
import Component from 'vue-class-component';

@Component({
    template: require('./modal.html'),
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        }
    },
    watch: {
        isOpen: 'onChange'
    }
})
export default class Modal {

    isOpen: boolean

    title: string

    $els: {
        modal: HTMLElement
    }

    onChange(value: boolean) {
        $(this.$els.modal).modal(value ? 'show' : 'hide')
    }

    close() {
        this.isOpen = false
    }
}
