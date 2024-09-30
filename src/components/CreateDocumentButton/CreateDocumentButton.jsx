import toast from "react-hot-toast";

import { useDispatch } from "react-redux";

import { Button } from "../UI/Button/Button";

import { createDocument } from "../../features/Documents/documents-slice";

function CreateDocumentButton() {
  const dispatch = useDispatch();
  return (
    <Button
      type="primary"
      cb={() => {
        dispatch(createDocument());
        toast.success("New document created");
      }}
    >
      <span>+ New Document</span>
    </Button>
  );
}
export { CreateDocumentButton };
