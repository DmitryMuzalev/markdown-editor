import toast from 'react-hot-toast';

const checkDocumentBeforeSave = (document, documentsList) => {
  const { id, name } = document;

  if (!name.trim().length) {
    toast.error('Document name cannot be an empty string. Document not saved.');
    return false;
  }

  const copyDocument = documentsList.find((doc) => doc.name === name);
  if (copyDocument && copyDocument.id !== id) {
    toast.error(`${name} already exists. \n Please change the document name.`);
    return false;
  }

  toast.success('Document saved');
  return true;
};
export { checkDocumentBeforeSave };
