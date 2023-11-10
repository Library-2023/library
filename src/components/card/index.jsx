
function Card(props) {
    



    
    return(
        <div className="my-2  ml-10  ">
    
        <div className="flex flex-row ">
            <h2 className="text-3xl">{props.header} </h2>
           
        </div>
        
        
        
        
        <div className="grid grid-flow-row grid-cols-4 gap- mt-1 ">
            
            <div className="w-52   rounded-lg bg-gray-300  ">
                <a href="#">
                <img className=" rounded-2xl w-52" src={props.img} alt="Image"/>
            </a>
            <div className="p-5  ">
                <p><a href="#">{props.name}</a></p>
        
                <div className=" flex flex-row my-3 ">
                  <h1 className="text-2xl justify-center">{props.describtion}</h1>
                </div>
                
                <div className="flex flex-row my-3">
                  
                </div>
        
                <div className="flex flex-row justify-center  ">
                    <a href="#" class="bg-gradient-to-r  from-green-600 to-pink-500 rounded-full py-2 px-4 text-black flex flex-row hover:from-green-600 hover:to-pink-600 text-sm">{props.price}</a>
                  
                </div>
                
                </div>
                    </div>
                        </div>
                            </div>
                        
    )
    
}

export default Card;