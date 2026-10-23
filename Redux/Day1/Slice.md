### What is a Slice?

#### The Problem a slice solves:
- Imagine your application has many kinds of shared data:
- Redux Store

|__cart

|__user

|__products

|__orders

- If we put all the logic for these into one huge file, it would become to difficult to manage.
- Instead, Redux Toolkit lets us divide the store into slices.
- Like cart Slice, user Slice, products Slice, orders Slice, etc.

- A Slice is basically a section of the Redux state along with the logic that controls the section.
