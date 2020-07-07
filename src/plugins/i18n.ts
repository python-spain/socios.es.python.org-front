import { Vue } from 'vue-property-decorator'
import { VueConstructor } from 'vue'
import VueI18n from 'vue-i18n'

declare module 'vue/types/vue' {
  interface Vue {
    rootI18nKey: string;
  }
}

export default {
  install (vue: VueConstructor<Vue>) {
    const $t = vue.prototype.$t
    const $tc = vue.prototype.$tc
    const ROOT_PREFIX = 'ROOT'

    vue.prototype.rootI18nKey = ROOT_PREFIX

    vue.prototype.$t = function (code: string, values?: VueI18n.Values) {
      if (code.startsWith(ROOT_PREFIX)) {
        return $t.call(this, `${code.replace(`${ROOT_PREFIX}.`, '')}`, values)
      }

      if (this.rootI18nKey === ROOT_PREFIX) {
        return $t.call(this, code, values)
      }

      return $t.call(this, `${this.rootI18nKey}.${code}`, values)
    }

    vue.prototype.$tc = function (code: string, values?: VueI18n.Values) {
      if (code.startsWith(ROOT_PREFIX)) {
        return $tc.call(this, `${code.replace(`${ROOT_PREFIX}.`, '')}`, values)
      }

      if (this.rootI18nKey === ROOT_PREFIX) {
        return $tc.call(this, code, values)
      }

      return $tc.call(this, `${this.rootI18nKey}.${code}`, values)
    }
  }
}
