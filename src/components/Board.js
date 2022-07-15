import PropTypes from "prop-types";

const Board = ({ id, name, owner, cards, selectABoard }) => {
  const titleModifier = name ? name : "None";
  let boardBody;

  if (id) {
    boardBody = (
      <p>
        `id: ${id}, name: ${name}, owner: ${owner} `
        {cards.map((card, index) => {
          return `message ${index + 1}: ${card.message}`;
        })}
      </p>
    );
  } else {
    boardBody = <p>Please select a board to view cards</p>;
  }

  return (
    <section>
      <h2>Selected Board: {titleModifier}</h2>
      {boardBody}
    </section>
  );
};

Board.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  owner: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default Board;
