
const Card = ({item}) => {
  
  return (
    <div className="flex flex-col gap-2  border-2 p-4">
      <img className="w-full object-cover h-full" src={item.img} alt="" />
      <button className="text-white bg-green-700 py-3 font-sans text-sm">مشاهده محصول</button>
      <span className="text-red-600">({item.title})</span>
    </div>
  )
}

export default Card