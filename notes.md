# Notes

## hooks

useState: for ui sync with js
useEffect: rerun content after change in dependencies and on pagereload
useRef: reference for a html element
useCallback: memorize function and reuse memory or thread
useId: generating unique IDs that can be passed to accessibility attributes

## Virtual DOM

### reconciliation
'reconciliation' is the algo behind what is popularly understood a as virtual DOM

### fiber
new reconciliation engine
'fiber' is a ground up rewrite of the reconciler
- pause work and come back to it later
- assign priority to different types of work
- reuse previously completed work
- assign abort work of its not longer needed

## State Management

 used to avoid prop-drilling

### Context API
  - createContext({}):
  - .Provider? provide data to children
### Redux Toolkit
  - configureStore({})
  - createSlice({name, initial state, reducers})
    - nanoid()
    - (state, action) => {}
  -  React Redux
    - Provider useDispatch, useSelector