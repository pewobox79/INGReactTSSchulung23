
type BoxLayoutType = {
    children: JSX.Element[]
}

export default function BoxLayout({children}:BoxLayoutType) {
  return (
      <div className="outputBox">
        {children}
        </div>
  )
}
