import {Newable} from '../../types';

interface TestInterface {
  doSomething(): void;
}

class Test implements TestInterface {
  public doSomething(): void {
    // Do something
  }
}

const correct1: Newable<TestInterface> = Test;
const correct2: Newable<Test> = Test;
const correct3: Newable<TestInterface>[] = [Test];

// @ts-expect-error
const incorrect1: Newable<TestInterface> = new Test();
// @ts-expect-error
const incorrect2: Newable<Test> = new Test();
// @ts-expect-error
const incorrect3: Newable<TestInterface> = 'Test';
// @ts-expect-error
const incorrect4: Newable<Test> = () => Test;
