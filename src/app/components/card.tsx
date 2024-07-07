export default function Card(props:{criteria:number}){
const {criteria}=props
const a=(criteria:number)=>(criteria>75?"text-green-500 font-bold":criteria>50?"text-yellow-500 font-bold":"text-red-500 font-bold")

    return (
        <div className="bg-white rounded-full h-24 w-24 p-4 flex flex-col justify-center items-center border-2 border-green-500">
         <span className={a(criteria)}>
            {`${criteria===undefined?"0.00%":criteria+"%"}`}
            </span>
        </div>
    )
}