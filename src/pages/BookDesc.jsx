import React, {useState} from 'react'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import "./bookdesc.css"
import { category_books } from '../categorybooks'

function BookDesc() {

    const [data, setData] = useState(category_books);
  function search(value) {
    const result = category_books.filter((item) => {
      return (
        item.title.toLowerCase().includes(value) ||
        item.author.toLowerCase().includes(value) ||
        item.subject.toLowerCase().includes(value) ||
        item.publish_date.toLowerCase().includes(value)
      );
    });
    setData(result);
  }
      return (
    <div className="BookDesc">
    <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => {
          search(e.target.value);
        }}
      />
        {data.map((values) => {
                const {
                  id,
                  image,
                  title,
                  author,
                  subject,
                  publish_date,
                  desc
                } = values;
                return(
        <div className='bdwrapper'>
            <div className='bdimg-container'>
                <img className='bdimg' src={image} />
            </div>
            <div className='bdinfo-container'>
                <div className='bdtitle'>
                    {title}
                </div>
                <div className='bdauthor'>
                    <span>by</span> {author}
                </div>
                <div className='bddesc'>
                {desc}
                </div>
                <br />
                <div className='bdsubject'>
                Subject: {subject}
                </div>
                <div className='bdpublishdate'>
                Publish date: {publish_date}
                </div>
                <span className='stars-rating'>⭐⭐⭐⭐⭐</span>
                <button className='wishlistbtn'>Wishlist</button>
            </div>
        </div>);
    })}
        <Newsletter />
        <Footer />
    </div>
  )
}

export default BookDesc