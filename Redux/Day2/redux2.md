### Actions & Reducers:

- Now we have Store -> Slice -> State
- The next question is "How do we actually change the state?"
- Thats where actions and reducers comes in.

- Imagine a simple counter:
- Suppose our redux state is: 
- { count: 0 }

- **The user clicks: Increment something needs to tell redux "increase the count by 1".**
- That instruction is an **action**.

- **Then something needs to decide how that state should change.**
- Thats the **reducer**.

#### What is an Action?
- An action describes what happened.
- Ex: "Increment the Counter" or "Add this product to the cart".
- An action doesn't directly change the state.
- It basically says: "This happended."

#### What is a Reducer?
- A reducer contains the logic for changing the state.

- For Example:
```text
Current State:
count = 0

Action:
Increment

Reducer:
count = count + 1

New State:
count = 1
```
- So remember action = what happened, reducer = how the state should change.

Example code:
```ts
import {createSlice} from "@reduxjs/toolkit";
const counterSlice = createSlice({
    name: "counter",

    initialState: {
        count = 0,
    },

    reducers: {
        increment: (state) => {
            state.count += 1;
        },
    },
});

export default counterSlice.reducer;
```

- state.count represents the current state of this slice.

#### Where is the Action?
```ts
reducers: {
    increment: (state) => {
        state.count += 1;
    },
}
```
- Redux toolkit automatically creates an action for this reducer.
- So from increment Redux toolkit generates an action that we can dispatch.
- Later we'll write: dispatch(increment());
- This means Dispatch the increment action
- Then redux runs the corresponding reducer.

The Complete flow becomes:

```text
Button clicked 
    |
dispatch(increment())
    |
"increment" action
    |
increment reducer
    |
state.count += 1
    |
redux store updated
    |
react Ui updates
```
- This is the core redux flow.

#### dispatch
- We will frquently see: dispatch(...)
- Dispatch means sending an action to Redux.
- Think of it as "Redux, This action happened."
- Redux then determines which reducer should handle that action.

|concept|Meaning|
|-------|-------|
|state|the data|
|Action|Describes what happened|
|Reducer|Defines how state changes|
|Dispatch|Sends the action to Redux|