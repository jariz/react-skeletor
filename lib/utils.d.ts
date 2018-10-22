import * as React from 'react';
import * as PropTypes from 'prop-types';
export declare type Styling = (() => (React.CSSProperties | string)) | React.CSSProperties | string;
export interface Pendable {
    isPending: boolean;
}
export interface SkeletorContext {
    isPending: boolean;
    styling: Styling;
}
export interface Context {
    skeletor: SkeletorContext;
}
export declare const createSkeletonStyle: (color: string) => {
    backgroundColor: string;
    color: string;
};
export declare const contextTypes: {
    skeletor: PropTypes.Requireable<PropTypes.InferProps<{
        isPending: PropTypes.Requireable<boolean>;
        styling: PropTypes.Requireable<string | object>;
    }>>;
};
