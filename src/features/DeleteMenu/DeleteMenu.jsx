//_Utils:
import toast from 'react-hot-toast';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Components:
import { ModalWindow } from '../../components/UI/ModalWindow/ModalWindow';

//_Actions:
import { deleteDocument } from '../Documents/documents-slice';
import { toggleShowDeleteMenu } from './delete-menu-slice';

function DeleteMenu() {
  const dispatch = useDispatch();

  const { currentDocument, documentsList } = useSelector(
    (state) => state.documents
  );

  const documentName = documentsList.find(
    (doc) => doc.id === currentDocument.id
  ).name;

  const closeDeleteMenu = () => dispatch(toggleShowDeleteMenu());

  const confirmDeleteDocument = () => {
    dispatch(deleteDocument());
    closeDeleteMenu();
    toast.success('Document deleted');
  };

  return (
    <ModalWindow onClose={closeDeleteMenu} onConfirm={confirmDeleteDocument}>
      <h4>Delete this document?</h4>
      <p>
        {`Are you sure you want to delete the ‘${documentName}’ document and its
        contents? This action cannot be reversed.`}
      </p>
    </ModalWindow>
  );
}
export { DeleteMenu };
