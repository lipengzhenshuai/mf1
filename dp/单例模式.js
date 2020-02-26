/**
 *
 * 单例模式：就是某个实例是唯一的，创建多次也是那一个
 *      实现方式不限
 *          比如vuex中通过缓存vue判断是否存在，如果缓存的有，并且和这个一样，那就不对vue进行操作
 */

let Vue // bind on install

export function install(_Vue) {
    if (Vue && _Vue === Vue) {
        // 如果发现 Vue 有值，就不重新创建实例了
        return
    }
    Vue = _Vue
    applyMixin(Vue)
}


