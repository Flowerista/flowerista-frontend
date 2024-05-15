import '../../../../app/styles/index.scss';

export const StyleDecorator = (story: () => JSX.Element): JSX.Element =>
  story();
