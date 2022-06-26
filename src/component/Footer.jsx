import React from 'react';

const Footer = ({author,color,fnChangePhrase, img_rnd}) => {
    return (
        <div className='foot'>
        <div ><img className='image'src={img_rnd} /></div>
        <div>
          <div className='author' >           
            {author}               
          </div>            
          <div className='btn-left'>
            <button onClick={fnChangePhrase}  style={{backgroundColor : color}} ><i className="fa-solid fa-shuffle"></i></button>
          </div>
        </div>
      </div>
    );
};

export default Footer;