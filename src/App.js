import "./App.css";
import MyForm from "./components/MyForm";
import List from "./components/List";
import Header from "./components/Header";

function App() {
    const headerText = "Welcome to my app!";

    const users = [
        {
            fullname: "John Doe",
            email: "john.doe2@gmail.com",
            pNumber: "0951252234",
        },
        {
            fullname: "Lebron James",
            email: "kingjames@gmail.com",
            pNumber: "0922134858",
        },
        {
            fullname: "Leah Michael",
            email: "lmichael@gmail.com",
            pNumber: "0932332817",
        },
        {
            fullname: "Stephen Curry",
            email: "sharpshooter@gmail.com",
            pNumber: "0933294848",
        },
    ];

    return (
        <div className="bg-purple-200 min-h-screen">
            <div className="m-auto max-w-lg border p-4">
                <Header text={headerText} />
                <MyForm />
                <List users={users} />
            </div>
        </div>
    );
}

export default App;
