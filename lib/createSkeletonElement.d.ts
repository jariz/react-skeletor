import * as React from 'react';
export interface InjectedProps {
    style?: React.CSSProperties;
    className?: string;
    'aria-hidden'?: boolean;
}
export declare const createSkeletonElement: <T = any>(type: string | React.ComponentClass<T, any> | React.StatelessComponent<T>, pendingStyle?: string | React.CSSProperties | (() => string | React.CSSProperties) | undefined) => React.StatelessComponent<T>;
