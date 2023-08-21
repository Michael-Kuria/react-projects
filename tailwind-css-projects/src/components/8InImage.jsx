import image from "./../assets/image.jpg"
const EightInImage = () => {

    return (
        <div className="h-full w-full grid place-content-center bg-slate-300">
            <div className="h-[400px] w-[500px] bg-gray-500 shadow-md rounded grid place-content-center">
                <div className="h-[300px] w-[400px] relative rounded-[50px]  overflow-clip">
                    <img src= {image} alt="pic"  className="h-[300px] w-[400px] object-cover object-right-top "/>
                    <div className="absolute h-[100px] w-[90px] top-[50px] border border-t-0 border-r-0  border-gray-500 border-[50px] rounded-full"></div>
                </div> 
            </div>
        </div>
    )

}

export default EightInImage;