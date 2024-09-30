import { useRefresh } from "./hooks";

export const RefreshFrequently = () => {
    let sec = 10;
    
  const { data: posts, loading } = useRefresh(sec);
  console.log("pons", posts);
  if (loading) {
    return (
      <div>
        <h2>Loading..</h2>
      </div>
    );
  }
  return (
    <div>
      <h1>Refreh data </h1>
      {posts?.map((p) => {
        return <p key={p.id}> {p.title}</p>;
      })}
    </div>
  );
};
