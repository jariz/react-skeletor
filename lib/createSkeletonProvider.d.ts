import * as React from 'react';
import { Styling } from './utils';
export declare function createSkeletonProvider<U>(dummyData: Partial<U> | ((props: Partial<U>) => Partial<U>), predicate: (props: Partial<U>) => boolean, styling?: Styling): <T extends Partial<U>>(WrappedComponent: React.StatelessComponent<T>) => React.ComponentClass<T, any>;
