
interface ContainerProps{
    children: React.ReactNode
}
const Container: React.FC<ContainerProps> = ({
    children
}) =>{
    return (
        <div className="w-screen xl:px-10 md:px-8 sm:px-7 px-7 mx-auto"
        >{children}
        </div>
    )
}
export default Container