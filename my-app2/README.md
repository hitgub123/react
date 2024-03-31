## create nextjs project:

```bash
    npx create-next-app@latest
```

## start nextjs project:

```bash
    npm run dev
    # or
    yarn dev
```


## in UseStateListAll.jsx:
> sometimes onClick={()=>XXX} will raise a bug,so u need use onClick={XXX},i dont know why.

```bash
    <button onClick={delArtist(artist.id)}>del</button>
        will call delArtist when the button is rendered,use next code to prevent it:
    <button onClick={()=>delArtist(artist.id)}>del</button>
```
        
## remove vercel deploment multiply

```bash
    vercel remove --safe my-app2
```

## use key to clear ur input(seeing ClearFormUsingKey3.jsx)

```bash
    method1: switch components having different key
        {isPlayerC ? (<Counter person="a" key="x" />) : (<Counter person="b" key="y" />)}
    method2: modify key of ur component
        <Counter person="key-name1" key={key1} />
        <button onClick={() => {setKey1(key1 + "1");}}>modify key1</button>
```

## u can use html component in react component by js script like document.getElementById,try to use useRef, and ref can be defined in html tag using variable name of callback function

## useMemo: seeing Effect2UseMemo.jsx

```bash
    u can let c=func2(b) in ur component,
    but function [func2] will be called even though a is not modified,
    u can let c = useMemo(() => func2(b), [b]),
    it makes that [func2(b)] is called only when b is modified
```

## useEffect is async: seeing Effect2.jsx

```bash
    while running fetch(url),<p>{useData(url)}</p> shows the default value '666',
    after fetching,then running Data("application"),it shows 'application'
```

## if u want to set a link like <Link href="/abc">abc</Link>,u should create a directory /app/abc,and create a file named page.tsx in it

## react route:

```bash
    import {  Link ,  Route,  BrowserRouter,  Routes} from "react-router-dom";
    <BrowserRouter>
        <ReactLink to="/">Home</ReactLink>
        <Routes>
            <Route path="/Accordion1" element={<Accordion1 />} />
        </Routes>
    </BrowserRouter>
```

有序列表：
1. a
2. 2
无序列表：
- aa
- cc
*斜体* **加粗** `行内代码/高亮1` $a=b^3$ H<sub>2</sub>O  X<sup>2</sup> ~~删除线~~ <u>下划线</u> <big>big</big> <small>small</small> <mark>高亮2</mark> 
