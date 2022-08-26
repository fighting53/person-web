import shortid from 'shortid'

export default {
    // 主要用于 Vue 的 diff 算法，为每个元素创建一个独一无二的 ID
    generateID() {
        return shortid.generate()
    },
    $(selector) {
        return document.querySelector(selector)
    },
}
