import {
  CssProps,
  PageProps,
  RefProps,
  IEditor,
  MobileHeaderCenter,
  MobileHeaderTitleIcon,
  MobileHeaderEmptyIcon,
  MobileTopSysIcon,
} from 'lupine.components';

export const HomePage = async (props: PageProps) => {
  let editor: IEditor | undefined;

  const ref: RefProps = {
    onLoad: async () => {
      const container = ref.$('.i-edit-view-box');
      if (container) {
        editor = IEditor.getEditor(container);
      }
    },
  };

  const css: CssProps = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    '.i-edit-container': {
      flex: 1,
      width: '100%',
      backgroundColor: 'var(--primary-bg-color)',
      overflow: 'hidden',
    },
    '.i-edit-view-box': {
      width: '100%',
      height: '100%',
    },
  };

  return (
    <div css={css} ref={ref}>
      <MobileHeaderCenter>
        <MobileHeaderTitleIcon
          title='Lupine Image Editor'
          left={<MobileHeaderEmptyIcon />}
          right={<MobileTopSysIcon />}
        />
      </MobileHeaderCenter>
      <div class='i-edit-container'>
        <div class='i-edit-view-box'></div>
      </div>
    </div>
  );
};
