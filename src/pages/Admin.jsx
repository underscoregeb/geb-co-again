import { useEffect } from "react"

function Page() {
  useEffect(() => {
    document.title = "Loading...";
    window.location.href = "rickroll.mp4";
  })
  return (
    <>
      <div className='doc-content'>
        <h1>Loading...</h1>
      </div>
    </>
  )
}

export default Page