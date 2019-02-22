import { Platform } from 'react-native'
import { YandexMetricaBridge as YandexMetricaBridgeNative } from './NativeModule'

export class YandexMetrica {
  static activateWithApiKey(apiKey) {
    YandexMetricaBridgeNative.activateWithApiKey(apiKey)
  }

  /**
   * Sends a custom event message and additional parameters (optional).
   * @param {string} message
   * @param {object} [params=null]
   */
  static reportEvent(message: string, params: ?Object = null) {
    if (Platform.OS === 'ios') {
      YandexMetricaBridgeNative.reportEvent(message)
    } else {
      YandexMetricaBridgeNative.reportEvent(message, params)
    }
  }

  /**
   * Sends error with reason.
   * @param {string} error
   * @param {object} reason
   */
  static reportError(error: string, reason: Object) {
    YandexMetricaBridgeNative.reportError(error, reason)
  }

  static setDryRun(enabled) {
    YandexMetricaBridgeNative.setDryRun(enabled)
  }

  static isInitialized() {
    return YandexMetricaBridgeNative.isInitialized()
  }
}
