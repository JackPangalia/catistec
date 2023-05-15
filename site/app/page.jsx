import Image from "next/image"

const Home = () => {
  return (
    <>
      <main className = 'bg-darkmode flex justify-around pt-16 pb-16 items-center'>
        <div>
          <h2 className = 'text-5xl font-bold'>
            Catistec
          </h2>
        </div>
        <Image src = './catisteclogo.svg' alt = 'catisteclogo' width = {280} height = {280} />
      </main>
    </>
  )
}

export default Home