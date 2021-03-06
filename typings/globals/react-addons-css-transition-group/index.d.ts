// Generated by typings
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/08ed4e9f1869e37e29514d862e0158b40e550232/react/react-addons-css-transition-group.d.ts
declare namespace __React {
    interface CSSTransitionGroupTransitionName {
        enter: string;
        enterActive?: string;
        leave: string;
        leaveActive?: string;
        appear?: string;
        appearActive?: string;
    }

    interface CSSTransitionGroupProps extends TransitionGroupProps {
        transitionName: string | CSSTransitionGroupTransitionName;
        transitionAppear?: boolean;
        transitionAppearTimeout?: number;
        transitionEnter?: boolean;
        transitionEnterTimeout?: number;
        transitionLeave?: boolean;
        transitionLeaveTimeout?: number;
    }

    type CSSTransitionGroup = ComponentClass<CSSTransitionGroupProps>;

    namespace __Addons {
        export var CSSTransitionGroup: __React.CSSTransitionGroup;
    }
}

declare module "react-addons-css-transition-group" {
    var CSSTransitionGroup: __React.CSSTransitionGroup;
    type CSSTransitionGroup = __React.CSSTransitionGroup;
    export = CSSTransitionGroup;
}
