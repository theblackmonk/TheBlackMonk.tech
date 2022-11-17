import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
import './Stockphotos.css';
const clientID = `?client_id=hmdqRkhKRAx6P2yQh2Fn3fx9kFXhrlikhTU_h0zgwVo` //access env variable ${process.env.REACT_APP_ACCESS_KEY}
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function Stockphotos() {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')
    const mounted = useRef(false);
    const [newImages, setNewImages] = useState(false);
  
    const fetchImages = async() =>{
      
      setLoading(true)
     
      let url 
      const urlPage = `&page=${page}`
      const urlQuery = `&query=${query}`
  
      if(query){
        url = `${searchUrl + clientID + urlPage + urlQuery}`
      } else {
        url = `${mainUrl + clientID + urlPage}`
      }
      
     
      try {
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data)
        setPhotos((oldPhotos) => {
          if(query && page === 1){
            return data.results
          } else if(query){
            return [...oldPhotos, ...data.results]
          } else {
            return [...oldPhotos, ...data]
          }
        })
        setNewImages(false);
        setLoading(false)
      } catch (error) {
        setNewImages(false);
        setLoading(false)
        //console.log(error)
      }
      
    }
    
    //fetchImages() this would be an inifinite loop as the App function runs on each state update
    //This useEffect limits it to run only once at the begining if [] is empty
    //We will refetch when the page changes however
    useEffect(() => {
      fetchImages()
      // eslint-disable-next-line
    }, [page]) 
  
  
    useEffect(() => {
      if (!mounted.current) {
        mounted.current = true;
        return;
      }
      if (!newImages) return;
      if (loading) return;
      setPage((oldPage) => oldPage + 1);
    }, [newImages]);
  
  
    /*
        window.innerHeight            //window height
        window.scrollY                  //amount you've scrolled
        document.body.scrollHeight    //total height of page
  
        If window height + amount you've scrolled = body height then you are the bottom of the page
        */
    const event = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 5) {
        setNewImages(true);
      }
    };
  
  
  
  //scroll effects can be done with a library, but here I will do it myself
  useEffect(() => {
    window.addEventListener('scroll', event);
    return () => window.removeEventListener('scroll', event);
  }, []);
  
    
  
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!query) return;
      if (page === 1) {
        fetchImages();
      }
      
      setPage(1)   //this will call useEffect and call fetchImages
    }
  
    return (
      <main>
        <section className="search">
          <form className="search-form">
            <input type="text" placeholder="search" className="form-input" 
            value={query} onChange={(e)=> setQuery(e.target.value)}
            />
            <button type="submit" className="submit-btn" onClick={handleSubmit} />
              <FaSearch />
          </form>
        </section>
        <section className="photos">
          <div className="photos-center">
            {photos.map((image, index) => {
              return <Photo key={index} {...image} /> 
            })}
          </div>
            {loading && <h2 className='loading'>Loading...</h2>}
        </section>
      </main>
    );
}

export default Stockphotos