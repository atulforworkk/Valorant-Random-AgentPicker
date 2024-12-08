import AgentCard from "@/components/agentCard/AgentCard";
import Card from "@/components/card/Card";
import { Grid } from "@mantine/core";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-xl font-bold">Get Your random Agent Selected</h1>
      </div>
      <Grid gutter={0}>
       <AgentCard/>
        <Grid.Col span={2.4} className="bg-white">2</Grid.Col>
        <Grid.Col span={2.4} className="bg-white">3</Grid.Col>
        <Grid.Col span={2.4} className="bg-white">4</Grid.Col>
        <Grid.Col span={2.4} className="bg-white">5</Grid.Col>
      </Grid>
    </div>
  );
};

export default Home;
