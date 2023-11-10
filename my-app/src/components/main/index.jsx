import Card from "../card";


function Main(params) {

const objArr = [


   {
    img:"https://m.media-amazon.com/images/I/718gUMg8PGL._AC_UY218_.jpg ",
    name:"Dashiell Hammet",
    describtion:"Falcon",
    price:"Read book"

  } ,


  {img:"https://m.media-amazon.com/images/I/71RL+1QwKtL._AC_UY218_.jpg ",
    name:"Gilian Flynn",
    describtion:"  Gone girl ",
    price:"Read book"

  } ,






  {img:"https://m.media-amazon.com/images/I/81SoIAzWbnL._AC_UY218_.jpg ",
    
    name:" Gilian Flynn",
    describtion:"Murder  Express ",
    price:"Read book "

  },


  {img:"https://apiv1.biblusi.ge/storage/book/HmrmzQ8j7vC0UoGXoS231prLaxIzRo7FeJ5HC28r.jpg ",
  
  name:"john williams ",
  describtion:"The Outsider ",
  price:"Read book "

},




{img:" https://m.media-amazon.com/images/I/91IQFh1h1mL._AC_UL320_.jpg",

name:"Jon Wasik ",
describtion:" The Awakening",
price:"Read book "

},

{img:"https://m.media-amazon.com/images/I/81-EehukxvL._AC_UL320_.jpg ",

name:"Matt Ryan ",
describtion:"WarShip ",
price:" Read book"

},


{img:"https://m.media-amazon.com/images/I/61DdAxRUbOL._AC_UL320_.jpg ",

name:"Ali K.eke ",
describtion:" Arcanus",
price:" Read book"

},


{img:"https://m.media-amazon.com/images/I/91F6NVlGGjL._AC_UL320_.jpg ",

name:"Hernan Diaz ",
describtion:"Trust ",
price:" Read book"
},




{img:"https://m.media-amazon.com/images/I/81vH6kaT1jL._AC_UL320_.jpg ",

name:"Lucy Score ",
describtion:"Things We Left ",
price:" Read book "

},




{img:" https://m.media-amazon.com/images/I/81iky8zUznL._AC_UL320_.jpg ",

name:" Cassandra Robbins",
describtion:" Power",
price:" Read book "

},



{img:" https://m.media-amazon.com/images/I/81+GjWnxwOL._AC_UL320_.jpg ",

name:"Lucy Score  ",
describtion:"Things We Hid. ",
price:"  Read book"

},



{
img:"https://m.media-amazon.com/images/I/7133yEVqcHL._AC_UL320_.jpg ",
name:"Meghan Quinn ",
describtion:"The Reunion ",
price:" Read book "

},


{img:"https://m.media-amazon.com/images/I/81n8VJAfZEL._AC_UL320_.jpg ",

name:" Ingrid Seimour",
describtion:"Prince Cruel ",
price:"  Read book"

},


{img:"https://m.media-amazon.com/images/I/81tZufOGaZL._AC_UL320_.jpg ",

name:" Priece Brown ",
describtion:"Red Rissing ",
price:"  Read book"

},

{img:" https://m.media-amazon.com/images/I/81d+yguu91L._AC_UL320_.jpg ",

name:" Alix E.Harrow",
describtion:" 1000 Dollars",
price:" Read book "

},


{img:"https://m.media-amazon.com/images/I/81S4dsWUoFL._AC_UL320_.jpg ",

name:" Stephania Garber",
describtion:" Broken Heart",
price:" Read book "

},


{img:" https://m.media-amazon.com/images/I/91Zp7O66WFL._AC_UL320_.jpg",

name:" Michael K.Reynolds",
describtion:"Flight on Ears ",
price:" Read book "

},

{img:"https://m.media-amazon.com/images/I/91rpu-oCmCL._AC_UL320_.jpg ",

name:"M. H.Reardon ",
describtion:"Flight Of The... ",
price:"  Read book"

},



{img:" https://m.media-amazon.com/images/I/71Ha25upy3L._AC_UL320_.jpg ",

name:" Ward Sanford ",
describtion:" Cry For Jerusa...",
price:"  Read book"

},


{img:" https://m.media-amazon.com/images/I/91IFMzosMAL._AC_UL320_.jpg ",

name:" Elithabet Garden",
describtion:"Tree Of Lives ",
price:" Read book "

},


{img:"https://m.media-amazon.com/images/I/611PBBh5U9L._AC_UL320_.jpg ",

name:" Fred Terling",
describtion:"Nath's Bride ",
price:"  Read book"

},


{img:"https://m.media-amazon.com/images/I/91tw9d5zxOL._AC_UL320_.jpg ",

name:" Joe Baldwin ",
describtion:"Her Drawings ",
price:" Read book "

},


{img:" https://m.media-amazon.com/images/I/61Si3XE3QyL._AC_UL320_.jpg",

name:" Ben Cheetham",
describtion:"Don't Look Ba... ",
price:" Read book "

},


{img:" https://m.media-amazon.com/images/I/6118kkZn+rL._AC_UL320_.jpg ",

name:" K. A. rilley",
describtion:" Recruitment",
price:"  Read book"

},



{img:" https://m.media-amazon.com/images/I/91WnHGTBg7L._AC_UL320_.jpg ",

name:"George Kldiashvili ",
describtion:"Her Family ",
price:" Read book "

},

{img:" https://m.media-amazon.com/images/I/51pbaLPxBPL._AC_UL320_.jpg ",

name:"Jeffery Strumsky ",
describtion:" Undying",
price:" Read book "

},


{img:" https://m.media-amazon.com/images/I/41kDtCpvBJL._AC_UL320_.jpg ",

name:"Freida McFadden ",
describtion:"The PerfectSon ",
price:" Read book "

},



{img:" https://m.media-amazon.com/images/I/7170rfpBwdL._AC_UL320_.jpg",

name:" S.D.Monaghan ",
describtion:"Toxic People ",
price:" Read book"

},

{img:" https://m.media-amazon.com/images/I/91qXDU9TXvL._AC_UL320_.jpg ",

name:"Teresa Discroll ",
describtion:" The Wagher",
price:" Read book "

},

{img:" https://m.media-amazon.com/images/I/61zB37hMoEL._AC_UL320_.jpg ",

name:" Jeffery Strumsky",
describtion:"Undying ",
price:" Read book "

},


{img:" https://m.media-amazon.com/images/I/91InL4NmOrL._AC_UL320_.jpg ",

name:"Freida McFaden ",
describtion:"The PerfectSon ",
price:" Read book"

},

{img:" https://m.media-amazon.com/images/I/81GBPSpRc8L._AC_UY218_.jpg ",

name:" Jean Grainger  ",
describtion:"Billie Romano",
price:"Read book "

},


{img:" https://m.media-amazon.com/images/I/61ynfAAMOjL._AC_UL320_.jpg ",

name:" Biography",
describtion:"Taylor Swift ",
price:"  Read book"

},

{img:" https://m.media-amazon.com/images/I/71SvUuU3CqL._AC_UL320_.jpg ",

name:" Biography",
describtion:"Jimmy Buffet ",
price:" Read book "

},

{img:" https://m.media-amazon.com/images/I/91g5uc-gtML._AC_UL320_.jpg ",

name:"Biography ",
describtion:"Nikola Tesla ",
price:"  Read book"

},


{img:" https://m.media-amazon.com/images/I/61PMoxpSsKL._AC_UL320_.jpg ",

name:" Kendra Petty",
describtion:"I'm Not Dead ",
price:"  Read book"

},


{img:" https://m.media-amazon.com/images/I/71hwUY5ZmxL._AC_UL320_.jpg ",

name:" Jordan Moore",
describtion:"Curious Minds ",
price:"  Read book"

},




{img:" https://m.media-amazon.com/images/I/81FZ4aaWszL._AC_UL320_.jpg ",

name:"Siddharta Mukherjee ",
describtion:"The song of.. ",
price:"  Read book"

},





{img:" https://m.media-amazon.com/images/I/91uhfngBB1L._AC_UL320_.jpg ",

name:" Nelis Degrasse Tyson",
describtion:" Cosmic Queries",
price:"  Read book"

},


{img:" https://m.media-amazon.com/images/I/91E8rS3E+ML._AC_UL320_.jpg ",

name:" Merlin Shdrake",
describtion:" Entagled Life",
price:" Read book"

}



































]

    return(
        <main className="  grid grid-flow-row grid-cols-4 gap-10  ">
            {
                objArr.map(el => (
                <Card img={el.img} header={el.header} name={el.name}  describtion={el.describtion} price={el.price} />
                ))
            }
        </main>
    )
    
}

export default Main;