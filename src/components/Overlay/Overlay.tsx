import React from 'react'
import { selectOverlay, setOverlay } from '../../store/features/mainReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';


const Overlay: React.FC = () => {
  const isOpen = useAppSelector(selectOverlay);
  const dispatch = useAppDispatch();
  
  return (
    <>{
      isOpen &&
      <div
        className='Overlay'
        onClick={() => dispatch(setOverlay(false))}>
      </div>
    }</>
  )
}
//       <Overlay isOpen={isMenu} onRequestClose={() => setIsMenu(false)}/>

export default Overlay;