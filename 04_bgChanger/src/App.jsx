import './App.css'


const changeBgColor = (color = "#121212") => {
  document.querySelector('body').style.backgroundColor = color
}
export const ColorButton = (props) => {

  return (
    <button onClick={() => changeBgColor(props.color)}
      style={{ backgroundColor: props.color }}
      className={` bg-[${props.color}] px-4 py-2 rounded-full`} > {props.name}</button >
  )
}

function App() {

  const colorList = [
    { name: "Red", color: "firebrick" },
    { name: "Green", color: "mediumseagreen" },
    { name: "Blue", color: "royalblue" },
    { name: "Violet", color: "violet" },
    { name: "Teal", color: "teal" },
    { name: "Black", color: "#000" },
    { name: "Default", color: "#121212" },
  ]

  return (
    <>
      <div className='bg-[rgba(255,255,255,0.08)] w-fit mx-auto my-4 p-4 flex gap-4 rounded-full'>
        {colorList.map((button, _) =>
          <ColorButton
            key={_}
            name={button.name}
            color={button.color}
          />
        )}
      </div>
    </>
  )
}

export default App
