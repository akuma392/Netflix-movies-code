import GenerCard from "./GenerCard";

const GenerPage = ({ geners }) => {
  return (
    <>
      {geners?.map((elm) => {
        return (
          <div key={elm.netflix_id}>
            <GenerCard generList={elm} />
          </div>
        );
      })}
    </>
  );
};

export default GenerPage;
