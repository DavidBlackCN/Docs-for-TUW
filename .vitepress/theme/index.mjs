import DefaultTheme from 'vitepress/theme'
import './style/index.css'

import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';

import { useLive2d } from 'vitepress-theme-website'

export default {
  extends: DefaultTheme,

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

        
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
}