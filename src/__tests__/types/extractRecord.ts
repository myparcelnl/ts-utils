/* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-unused-vars,@typescript-eslint/no-magic-numbers */
// noinspection JSUnusedLocalSymbols

import {ExtractRecord} from '../../types';

interface User {
  name: string;
  id: number;
  isActive: boolean;
}

const correct1: ExtractRecord<User, string> = {
  name: 'name',
};

const correct2: ExtractRecord<User, number> = {
  id: 42,
};

const correct3: ExtractRecord<User, boolean> = {
  isActive: true,
};

const correct4: ExtractRecord<User, string | number> = {
  name: 'name',
  id: 42,
};

const correct5: ExtractRecord<User, string | boolean> = {
  name: 'name',
  isActive: true,
};

const correct6: ExtractRecord<User, string[]> = {};

const incorrect1: ExtractRecord<User, string> = {
  // @ts-expect-error
  id: 42,
};
