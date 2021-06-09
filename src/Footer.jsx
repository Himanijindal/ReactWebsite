import React from 'react'

const Footer = () => {
  let d=new Date().getFullYear();
    return (
        <>
      <footer className="w-100 bg-light text-center"><p>©️ {d} Industries . All Rights reserved | Terms and Condition</p></footer>
        </>
    )
}

export default Footer;