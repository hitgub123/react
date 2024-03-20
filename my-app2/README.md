create nextjs project:
    npx create-next-app@latest

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
lily1
lily1
lily1
lily1
