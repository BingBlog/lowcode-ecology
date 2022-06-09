import { snippets } from './snippets';
import props from './propsSchema';

const FormilyInputMeta = {
  componentName: 'FormilyFormLayout',
  title: 'Card',
  group: 'Formily',
  category: '布局组件',
  npm: {
    package: '@seada/react-components',
    version: 'latest',
    exportName: 'FormilyFormLayout',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    component: {
      isContainer: true,
    },
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: 'https://img.alicdn.com/imgextra/i3/O1CN01G7Lc8e1pZL7p4cdKc_!!6000000005374-2-tps-112-112.png',
};

export default {
  ...FormilyInputMeta,
  snippets,
};