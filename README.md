 It's can be build under rn 0.61(зщвы file create and updated) but does not work(methods to native part returns undefined)
temporary freezed

YandexMobileMetricaBridge
============
**Yandex Mobile Metrica Bridge** provides an interface to the native Yandex Mobile Metrica libraries on both **iOS** and **Android**.

## Installation and linking libraries

* Install with npm: `npm install --save rn-yandex-metrica`
  Or, install with yarn: `yarn add rn-yandex-metrica`

* Link with: `react-native link rn-yandex-metrica`

## Usage
```javascript
import {
  YandexMetrica,
} from 'rn-yandex-metrica';

// The yandex metrica must be activated
YandexMetrica.activateWithApiKey('app key');

// Event reporting
YandexMetrica.reportEvent('Hello from react-native');

// Disables reporting (must be called before activation)
YandexMetrica.setDryRun(true);
```
