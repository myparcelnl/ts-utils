/* eslint-disable @typescript-eslint/ban-ts-comment,@typescript-eslint/no-unused-vars,@typescript-eslint/no-magic-numbers */
// noinspection JSUnusedLocalSymbols

import {ExtractRecordKeys} from '../../types';

const correct1: ExtractRecordKeys<{a: number; b: string}, number> = 'a';
const correct2: ExtractRecordKeys<{a: number; b: string}, string> = 'b';
const correct3: ExtractRecordKeys<{a: number; b: string; c: boolean}, boolean> = 'c';
const correct4: ExtractRecordKeys<{a: number; b: string; c: boolean}, number | string>[] = ['a', 'b'];
const correct5: ExtractRecordKeys<{a: (a: number) => void; b: (b: string) => void}, (a: number) => void> = 'a';

// @ts-expect-error
const incorrect1: ExtractRecordKeys<{a: number; b: string}, boolean> = 'a';
// @ts-expect-error
const incorrect2: ExtractRecordKeys<{a: number; b: string}, number> = 'b';
// @ts-expect-error
const incorrect3: ExtractRecordKeys<{a: number; b: string; c: boolean}, string> = 'c';
// @ts-expect-error
const incorrect4: ExtractRecordKeys<{a: number; b: string; c: boolean}, number | string>[] = ['c'];
// @ts-expect-error
const incorrect5: ExtractRecordKeys<{a: (a: number) => void; b: (b: string) => void}, (a: number) => void> = 'b';
