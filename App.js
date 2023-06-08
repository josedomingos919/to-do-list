import { StatusBar } from "expo-status-bar";
import { AppProvider } from "./src/context/app";
import { StackRouter } from "./src/routes/stack";

export default function App() {
  return (
    <AppProvider>
      <StatusBar style="auto" />
      <StackRouter />
    </AppProvider>
  );
}
