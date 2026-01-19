import { SimpleView } from "@/components/simple-view";
import AnimatedText from '@/modules/animated-text';
import { Text } from "react-native";

const Stats = () => (
  <SimpleView>
    <Text>{AnimatedText.hello()}</Text>
  </SimpleView>
);

export default Stats;
