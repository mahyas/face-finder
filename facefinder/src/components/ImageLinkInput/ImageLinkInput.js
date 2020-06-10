import React from 'react';
import './ImageLinkInput.css';

const ImageLinkInput = ({onInputChange , onButtonSubmit}) =>{
    return (
        <div>
          <p className='f3'>
            {'This app is designed to detect faces in your pictures. Upload your photo Below.'}
          </p>
          <div className='center'>
            <div className='form center pa4 br3 shadow-5'>
              <input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
              <button
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onButtonSubmit}
              >Detect</button>
            </div>
          </div>
        </div>
      );
}

export default ImageLinkInput;