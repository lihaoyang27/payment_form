
import './App.css';
import PaymentPageLayout from "./HOC/PaymentPageLayout/PaymentPageLayout";
import FormContainer from "./components/FormContainer/FormContainer";

function App() {
  return (
    <div className="App">
        <PaymentPageLayout>
            <FormContainer/>
        </PaymentPageLayout>
    </div>
  );
}

export default App;
