import { useEffect } from "react";
import { useState } from "react";

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        "https://api.github.com/users/arun-kumar-kannan",
      );
      const data = await response.json();
      setData(data);
    }
    getUser();
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github
      <ul>
        <li>{data.login}</li>
        <li>{data.followers}</li>
      </ul>
      <img
        src={data.avatar_url}
        alt={data.login}
        className="w-40 rounded-full mx-auto mt-5"
      />
    </div>
  );
}

export default Github;
