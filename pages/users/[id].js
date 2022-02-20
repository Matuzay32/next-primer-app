import React from "react";
import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Container from "./../../components/Container";

export default function UserProFile(props) {
  //uso el hook de next que me trae todo lo perteneciente  a esta ruta
  const router = useRouter();

  // Obtengo los distinto parametros de la query
  // y en este caso utilizo el id
  //   console.log(router.query);
  const { id } = router.query;
  console.log(props);

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={props.avatar}
              alt="Card image cap"
            />

            <div className="card-body text-center">
              <h5 className="card-title">
                {`${props.first_name}    ${props.last_name}`}
              </h5>

              <p className="card-text">{props.email}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

UserProFile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);

  const resJson = await res.json();
  const { data } = resJson;
  return data;
};
