import { useDispatch, useSelector } from "react-redux";
import { checkDocumentBeforeSave } from "../../../helpers/checkDocumentBeforeSave";
import { Button } from "../../UI/Button/Button";
import { saveDocument } from "../../../features/Documents/documents-slice";

import SaveIcon from "../../../assets/icon-save.svg";
import { useMediaQuery } from "react-responsive";

function SaveButton() {
  const dispatch = useDispatch();
  const { currentDocument, documentsList } = useSelector(
    (state) => state.documents
  );
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  const handlerSaveDocument = () => {
    const isCheck = checkDocumentBeforeSave(currentDocument, documentsList);
    isCheck
      ? dispatch(saveDocument())
      : document.getElementById("fileName").focus();
  };

  return (
    <Button
      type="primary"
      cb={handlerSaveDocument}
      disabled={!documentsList.length}
    >
      <img src={SaveIcon} alt="save changes" />
      {!isTablet && <span>save changes</span>}
    </Button>
  );
}
export { SaveButton };
