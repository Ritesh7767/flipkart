interface buttonInterface {
    func: (num: number) => void
    argument: number
}
export const Leftbutton = ({func, argument}: buttonInterface) => {

  return (
        <span onClick={()=>func(argument)} className="cursor-pointer hidden absolute top-[80px] shadow-lg p-[14px] h-[75px] lg:flex justify-center items-center rounded-tr-sm rounded-br-sm">&#10094;</span>
  )
}

export const RightButton = ({func, argument}: buttonInterface) => {
    return (
        <span onClick={()=>func(-argument)} className="cursor-pointer hidden absolute top-[80px] shadow-lg p-[14px] h-[75px] lg:flex justify-center items-center rounded-bl-sm rounded-tl-sm right-0">&#10095;</span>
    )
}