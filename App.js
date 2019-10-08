import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./HomeScreen";
import AnotherScreen from "./AnotherScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Another: { screen: AnotherScreen }
  },
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
