import Container from "./../components/Container";
import fetch from "isomorphic-fetch";
import Users from "../components/Users";

export default function Index({ usersFetch }) {
  return (
    <Container>
      <h1>next</h1>

      <Users users={usersFetch} />
    </Container>
  );
}
// En esta funcion hago uso del fetch que despues se pasan como propiedad a la pagina en cuestion
// Eso me permite usarlo como una propiedad en otros compoenentes

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  // console.log(data, " estos son los datos desde el index linea 17");
  return { usersFetch: data.data };
};
