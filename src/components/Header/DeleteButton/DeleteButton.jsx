//_Images:
import DeleteIcon from '../../../assets/icon-delete.svg';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Components:
import { Button } from '../../UI/Button/Button';

//_Actions:
import { toggleShowDeleteMenu } from '../../../features/DeleteMenu/delete-menu-slice';

function DeleteButton() {
  const dispatch = useDispatch();
  const { currentDocument } = useSelector((state) => state.documents);

  const handlerDeleteDocument = () => dispatch(toggleShowDeleteMenu());

  return (
    <Button cb={handlerDeleteDocument} disabled={!currentDocument}>
      <img src={DeleteIcon} alt="delete file" />
    </Button>
  );
}
export { DeleteButton };
