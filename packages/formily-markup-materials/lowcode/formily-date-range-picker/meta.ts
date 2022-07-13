import { snippets } from './snippets';
import props from './propsSchema';
import { DateRangePickerSource, takeIcon } from '../icons';

const FormilyComponentMeta = {
  componentName: 'FormilyDateRangePicker',
  title: 'DateRangePicker',
  group: 'Formily',
  category: '输入组件',
  npm: {
    package: '@seada/formily-markup-materials',
    version: 'latest',
    exportName: 'FormilyDateRangePicker',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props,
    supports: {
      style: true,
    },
  },
  advanced: {},
  icon: takeIcon(DateRangePickerSource),
};

export default {
  ...FormilyComponentMeta,
  snippets,
};
