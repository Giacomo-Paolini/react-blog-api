import AppForm from "./components/AppForm";

export default function App() {
  function getPosts() {
    axios.get("http://localhost:3000/posts").then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="text-center p-4">
      <AppForm />
    </div>
  );
}
