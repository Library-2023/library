

    function Header(){
        

        return(
            
            
                <header class="bg-blue-500 p-4">
                    <div class="container mx-auto flex flex-col items-center">
                        
                        <div class="flex items-center space-x-4 mb-4">
                            <a href="/books" class="text-white text-lg font-semibold hover:text-gray-200">
                                <i class="fas fa-book"></i> Books
                            </a>
                            <div class="relative">
                                <input type="text" placeholder="Search" class="w-64 py-2 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                                <button class="absolute right-3 top-2/4 transform -translate-y-2/4 text-gray-400 hover:text-blue-400">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                            <a href="/basket" class="text-white hover:text-gray-200">
                                <i class="fas fa-shopping-basket"></i> Your Basket
                            </a>
                            <a href="/profile" class="text-white hover:text-gray-200">
                                <i class="fas fa-user"></i> Profile
                            </a>
                        </div>
            
                        
                        <div class="bg-white p-8 rounded-lg shadow-lg w-full text-center">
                            <h1 class="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our Library</h1>
                            <p class="text-gray-600">Explore our collection of books from various genres and authors.</p>
                        </div>
            
                        
                        <div class="mt-4 flex space-x-4">
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">
                                Value
                            </button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">
                                Author
                            </button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">
                                Genre
                            </button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">
                                Age
                            </button>
                            <button class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 hover:text-blue-100">
                                Book Language
                            </button>
                        </div>
                    </div>
                </header>
            
                
            




        )

            


    }


    export default Header;