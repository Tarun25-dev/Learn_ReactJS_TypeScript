import Input1 from "./ControlInputs";
import Input2 from "./ControlInputs2";
import Input3 from "./MultipleInputs";
import ObjectStateInputForm from "./ObjectStateForm";
import SubmitForm from "./FormSubmit";
import Example13 from "./example13";

function App(){
    return(
        <div>
            <Input1 />
            <hr />
            <Input2 />
            <hr />
            <Input3 />
            <hr />
            <ObjectStateInputForm />
            <hr />
            <SubmitForm />
            <hr />
            <Example13 />
        </div>
    )
}

export default App;