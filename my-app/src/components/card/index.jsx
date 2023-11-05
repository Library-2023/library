

    function Card(params){

        return(
    
            <section className="bg-gray-100 flex flex-wrap">
            <div className="container rounded pl-3 ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    <div className="bg-white rounded-lg shadow-lg p-4 ">
                        <img src="book1.jpg" alt="Book 1" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Book Title 1</h3>
                        <p className="text-gray-600">Author: Author Name</p>
                        <p className="text-gray-600">Genre: Fiction</p>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">Details</button>
                    </div>
                    
                </div>
            </div>

            <div className="container rounded pl-3 ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    <div className="bg-white rounded-lg shadow-lg p-4 ">
                        <img src="book1.jpg" alt="Book 1" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Book Title 1</h3>
                        <p className="text-gray-600">Author: Author Name</p>
                        <p className="text-gray-600">Genre: Fiction</p>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">Details</button>
                    </div>
                    
                </div>
            </div>

            <div className="container rounded pl-3 ">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 ">Featured Books</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    
                    <div className="bg-white rounded-lg shadow-lg p-4 ">
                        <img src="book1.jpg" alt="Book 1" className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Book Title 1</h3>
                        <p className="text-gray-600">Author: Author Name</p>
                        <p className="text-gray-600">Genre: Fiction</p>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">Details</button>
                    </div>
                    
                </div>
            </div>

        </section>

  

        )



    }

    export default Card;