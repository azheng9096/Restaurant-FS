import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  
  display: flex;
`;

const EditDishItem = () => {
  return (
    <Container>
      <div>
        <div>
          <h3>Dish Name</h3>
          <h3>$00.00</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div></div>
    </Container>
  );
};

export default EditDishItem;
