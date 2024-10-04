//_Images:
import SaveIcon from '../../../assets/icon-save.svg';

//_Hooks:
import { useDispatch, useSelector } from 'react-redux';

//_Helpers:
import { checkDocumentBeforeSave } from '../../../helpers/checkDocumentBeforeSave';

//_Actions:
import { saveDocument } from '../../../features/Documents/documents-slice';

//_Components:
import { Button } from '../../UI/Button/Button';

function SaveButton() {
  const dispatch = useDispatch();
  const { currentDocument, documentsList } = useSelector(
    (state) => state.documents
  );

  const handlerSaveDocument = () => {
    const isCheck = checkDocumentBeforeSave(currentDocument, documentsList);
    isCheck
      ? dispatch(saveDocument())
      : document.getElementById('fileName').focus();
  };

  return (
    <Button
      type="primary"
      cb={handlerSaveDocument}
      disabled={!currentDocument}
      classes={['save-button']}
    >
      <img src={SaveIcon} alt="save changes" />
      <span>save changes</span>
    </Button>
  );
}
export { SaveButton };
