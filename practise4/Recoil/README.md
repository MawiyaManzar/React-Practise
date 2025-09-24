## Atom

Atom is the most smallest unit of state you use to store variable similar to usestate. but they are more optimal then useState hook

first make a atoms.js file.
recoild provides you with a lot of hooks userecoilState,useRecoilValue,useSetRecoilState

useRecoilValue- gives you the actual number / value
useRecoilState-give both the value(count) and updating state variable (eg:setcount)
useSetRecoilState- only give the function to update state

## Selectors

Selector is derived from other atoms.
here you give a key and a value. you use {get} 