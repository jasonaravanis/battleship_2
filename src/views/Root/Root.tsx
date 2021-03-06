import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "../../Routes";
import GameView from "../Game";
import OutcomeView from "../Outcome";
import HomeView from "../Home";
import SetupContainer from "../../containers/Setup/Setup";
import { Container, GlobalStyle } from "./styles";

const RootView: FC = () => {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<HomeView />} />
        <Route path={routes.SETUP} element={<SetupContainer />} />
        <Route path={routes.GAME} element={<GameView />} />
        <Route path={routes.OUTCOME} element={<OutcomeView />} />
      </Routes>
    </Container>
  );
};

export default RootView;
