import Image from "next/image";

const Product = ({title, description, imgLink}) => {
  return (
    <div className = 'flex justify-center items-center flex-col bg-zinc-900 p-10 rounded-2xl'>
      <h2 className = 'text-3xl text-gray-200 font-bold mb-2'>{title}</h2>
      <p className = 'text-xl text-zinc-500 font-semibold mb-6 text-center'>{description}</p>
      <Image src = {imgLink} alt = 'product-image' width={1920} height={1080} className = ' w-5/6 border-solid border-1 border-gray-200'/>
    </div>
  )
}

export default Product 