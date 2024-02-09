import { useLive2d } from 'vitepress-theme-website'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {},
  setup() {

        //看板娘
        useLive2d({
          enable: true,
          model: {
            url: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/girls-frontline/HK416-2/normal/model.json'
          },
          display: {
            position: 'right',
            width: '135px',
            height: '300px',
            xOffset: '35px',
            yOffset: '5px'
          },
          mobile: {
            show: true
          },
          react: {
            opacity: 0.8
          }
        })