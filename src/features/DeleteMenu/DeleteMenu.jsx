import { Button } from "../../components/UI/Button/Button";
import { ModalWindow } from "../../components/UI/ModalWindow/ModalWindow";
import { useDispatch, useSelector } from "react-redux";
import { deleteDocument } from "../Documents/documents-slice";
import { toggleShowDeleteMenu } from "./delite-menu-slice";
import toast from "react-hot-toast";

function DeleteMenu() {
  const dispatch = useDispatch();
  const { currentDocument } = useSelector((state) => state.documents);

  const handlerDeleteButton = () => {
    dispatch(deleteDocument());
    dispatch(toggleShowDeleteMenu());
    toast.success("Document deleted");
  };

  return (
    <ModalWindow>
      <h4>Delete this document?</h4>
      <p>
        {`Are you sure you want to delete the ‘${currentDocument?.name}’ document and its
        contents? This action cannot be reversed.`}
      </p>
      <Button type="primary" cb={handlerDeleteButton}>
        confirm & delete
      </Button>
    </ModalWindow>
  );
}
export { DeleteMenu };
