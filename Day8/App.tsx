import Click from "./Event";
import { PassArgEvent } from "./Event";
import Change from "./EventWithTypescript";
import { TChange } from "./EventWithTypescript";
import { HandleClickEvent } from "./EventWithTypescript";

function App(){
    return(
        <>
        <p>Event Click</p>
        <Click />
        <hr />
        <p>Paasing arguments to events</p>
        <PassArgEvent />
        <hr />
        <p>Typescript with event</p>
        <Change />
        <TChange />
        <hr />
        <p>HandlingClickEvent</p>
        <HandleClickEvent />

        </>
    );
}

export default App;