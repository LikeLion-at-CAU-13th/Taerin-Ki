import React, { useState, useEffect } from "react";
import { getFoods, addFood } from "./mock";
import styled from "styled-components";

const Component = () => {
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getFoods()
      .then((data) => setFoods(data))
      .finally(() => setLoading(false));
  }, []);

  const handleAddFood = () => {
    setLoading(true);
    addFood(input)
        .then(() => getFoods())
        .then(data => {
        setFoods(data);
        setInput("");
        setError(null);
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false));
    };

  const onKeyDown = (e) => {
    if (e.key === "Enter") handleAddFood();
  };

  return (
    <Container>
      <Title>내가 좋아하는 음식은...</Title>
      <div style={{ textAlign: "center" }}>
        <Input
          type="text"
          placeholder="음식 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <Button onClick={handleAddFood} disabled={loading}>
          추가
        </Button>
      </div>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <LoadingMessage>로딩 중...</LoadingMessage>}

      <List>
        {foods.map((food, i) => (
          <ListItem key={i}>{food}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Component;

const Container = styled.div`
  background: #fff3e0;
  max-width: 380px;
  margin: 40px auto;
  padding: 30px 25px;
  border-radius: 14px;
  box-shadow: 0 4px 20px rgb(0 0 0 / 0.1);
`;

const Title = styled.h2`
  margin-bottom: 18px;
  color: #d84315;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1.5px solid #ffccbc;
  border-radius: 6px;
  font-size: 1rem;
  width: 220px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff7043;
  }
`;

const Button = styled.button`
  padding: 10px 18px;
  margin-left: 12px;
  background-color: #ff7043;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ffccbc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #e64a19;
  }
`;

const List = styled.ul`
  margin-top: 24px;
  padding-left: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.li`
  background-color: #fff3e0;
  margin-bottom: 10px;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 1.1rem;
  color: #bf360c;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.07);
  width: 280px;
`;

const ErrorMessage = styled.p`
  color: #d32f2f;
  margin-top: 12px;
  text-align: center;
`;

const LoadingMessage = styled.p`
  margin-top: 12px;
  text-align: center;
  color: #ff8a65;
`;