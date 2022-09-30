interface ButtonProps{
  title: string;
}
function Button(props: ButtonProps){
  return(
    <button>{props.title}</button>
  )
}
function App() {
  return (
    <div>
      <Button title="vai1" />
      <Button title="vai2" />
      <Button title="vai3" />
      <Button title="vai5" />

    </div>
  )
}

export default App
