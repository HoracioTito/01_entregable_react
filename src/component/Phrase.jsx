import React from 'react';

const Phrase = ( {phase} ) => {

    return (


          <div className='text-phrase'>
             <div>
                 <i className="fa-solid fa-quote-left"></i>
                   {" "}{phase}{" "}
                 <i className="fa-solid fa-quote-right"></i>
             </div>
          </div>

    );
};

export default Phrase;