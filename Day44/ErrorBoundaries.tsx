import { Component, type ReactNode } from "react";

type State = {
    hasError: boolean;
};

type Props = {
    children: ReactNode;
};

class ErrorBoundary extends Component<Props, State>{
    state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(): State{
        return{
            hasError: true
        };
    }
    render(){
        if(this.state.hasError){
            return (<div><h1>Something went Wrong!</h1><p>This section could not be displayed.</p></div>);
        }
        return this.props.children;
    }
}

export default ErrorBoundary;