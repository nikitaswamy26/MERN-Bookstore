import React, { useEffect, useState } from 'react'
import Course from './Course'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import Cards from './Cards'
import toast from 'react-hot-toast'
import { Link, useParams, useSearchParams } from 'react-router-dom'

const Book = () => {
    const params = useParams()
    const [book, setBook] = useState([]);
    const [bookPrice, setBookPrice] = useState(0);
  useEffect(() => {
    const getBook = async () => {
    const user = await JSON.parse(localStorage.getItem("Users") || "")
    if(!user){
      toast.error("Error: Invalid Author");
      return 
    }
    const uid = user._id
      try {
        const res = await axios.get("http://localhost:4001/book/");
       
        
        setBook(res.data.filter(book => book._id == params.bookid));
        
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
 useEffect(()=>{
  let newPrice = 0;
  book.forEach(book => {
    newPrice += parseInt(book.price)
  })
  setBookPrice(newPrice)
 },[book])
  
  return (
    <>
    <Navbar />
    <div className=" min-h-screen">
        <div className='mt-12 px-4'>
        <Link to="/course">
            <button className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mx-2">
                 Back
            </button>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards broughtBook key={item.id} item={item} />
          ))}
        </div>

        {/* <div style={{
          width:"50%",
          marginInline:"auto",
          padding:20
        }}>
          {
            book.map(book => (
              <div style={{
                display:"flex",
                justifyContent:"space-between",
                
              }}>
                <p>{book.title}</p>
                <p>${book.price}</p>
              </div>
            ))
          }
          <div style={{
                display:"flex",
                justifyContent:"space-between",
                borderTop:"1px solid #fff",
                marginBlock:10
              }}>
            <p>Total:</p>
            <p>${bookPrice}</p>
          </div>
          <div>
          <button onClick={()=> {
            toast.success("Payment Successful");
          }} className="mt-8 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mx-2">
                Pay Now
            </button>
          </div>
        </div> */}
        
      
          
    </div>
    <Footer />
  </>
  )
}

export default Book