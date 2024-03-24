create nextjs project:

```bash
    npx create-next-app@latest
```

start nextjs project:

```bash
    npm run dev
    # or
    yarn dev
```

```bash
in UseStateListAll.jsx
    <button onClick={delArtist(artist.id)}>del</button>
        will call delArtist when the button is rendered,use next code to prevent it:
    <button onClick={()=>delArtist(artist.id)}>del</button>
        but sometimes onClick={()=>XXX} will raise a bug,so u need use onClick={XXX},
        i dont know why.
```

remove vercel deploment multiply

```bash
    vercel remove --safe my-app2
```

use key to clear ur input(seeing ClearFormUsingKey3.jsx)

```bash
    method1: switch components having different key
        {isPlayerC ? (<Counter person="a" key="x" />) : (<Counter person="b" key="y" />)}
    method2: modify key of ur component
        <Counter person="key-name1" key={key1} />
        <button onClick={() => {setKey1(key1 + "1");}}>modify key1</button>
```

u can use html component in react component by js script like document.getElementById,
try to use useRef, and ref can be defined in html tag using variable name of callback function
