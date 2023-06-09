import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props){
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler(){
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }

    return(
    <div className="card">
        <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
            {modalIsOpen && <Backdrop  onCancel={closeModalHandler}/>}
            {/*not an inbuilt component and hence cannot directly use onClick
            hence we create a different function in backdrop and pass on the 
            function to div whixh can have onClick directly*/}
    </div>);
}
export default Todo;