import { StoryContext } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactElement, ReactNode } from 'react';

type StoryFnType = (context: StoryContext) => ReactNode;

export const RouterDecorator = (
  StoryFn: StoryFnType,
  context: StoryContext
): ReactElement => <BrowserRouter>{StoryFn(context)}</BrowserRouter>;
