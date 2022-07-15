import PropTypes from "prop-types";
import BoardEntry from "./BoardEntry";

const AllBoards = ({ boards, selectABoard }) => {
  const boardEntries = () => {
    return boards.map((board) => (
      <BoardEntry
        key={board.id}
        id={board.id}
        name={board.name}
        owner={board.owner}
        selectABoard={selectABoard}
      />
    ));
  };

  if (boards) {
    return (
      <section className="all-boards">
        <h2>Select A Board</h2>
        <ul>{boardEntries()}</ul>
      </section>
    );
  } else {
    return <p className="all-boards">No Boards Created</p>;
  }
};

AllBoards.propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          message: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  selectABoard: PropTypes.func.isRequired,
};

export default AllBoards;
