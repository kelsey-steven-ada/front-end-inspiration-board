const BoardEntry = ({ id, name, owner, selectABoard }) => {
  const onBoardClick = () => {
    selectABoard(id);
  };

  return (
    <li key={id} onClick={onBoardClick}>
      <div className="board-list-text-box">
        <p>Board Name: {name}</p>
        <p>Board Owner: {owner}</p>
      </div>
    </li>
  );
};

export default BoardEntry;
