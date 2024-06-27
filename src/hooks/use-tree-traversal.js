const useTreeTraversal = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }
    let lastNode = [];
    lastNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });
    return { ...tree, items: lastNode };
  };
  return { insertNode };
};

export default useTreeTraversal;
