# notes

## hooks

useState: for ui sync with js
useEffect: rerun content after change in dependencies and on pagereload
useCallback: memorize function and reuse memory or thread
useRef: reference for a html element

## Virtual DOM

### reconciliation
'reconciliation' is the algo behind what is popularly understood a as virtual DOM

### fiber
new reconciliation engine
'fiber' is a ground up rewrite of the reconciler
pause work and come back to it later
assign priority to different types of work
reuse previously completed work
assign abort work of its not longer needed