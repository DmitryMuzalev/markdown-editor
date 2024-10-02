import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../UI/Button/Button";
import { toggleShowDeleteMenu } from "../../../features/DeleteMenu/delite-menu-slice";
import DeleteIcon from "../../../assets/icon-delete.svg";

function DeleteButton() {
  const { documentsList } = useSelector((state) => state.documents);

  const dispatch = useDispatch();
  const handlerDeleteDocument = () => dispatch(toggleShowDeleteMenu());

  return (
    <Button cb={handlerDeleteDocument} disabled={!documentsList.length}>
      <img src={DeleteIcon} alt="delete file" />
    </Button>
  );
}
export { DeleteButton };
