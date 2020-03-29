export default async function executeCreator(usecase, props) {
  return new Promise((resolve, reject) => {
    const onSuccess = data => {
      resolve(data);
      cleanUp();
    };
    const onError = error => {
      reject({
        type: "ServerError",
        details: error.message
      });
      cleanUp();
    };
    const cleanUp = () => {
      usecase.removeListener("SUCCESS", onSuccess);
      usecase.removeListener("ERROR", onError);
      usecase.removeListener("SERVER_ERROR", onError);
    };
    usecase
      .once("SUCCESS", onSuccess)
      .once("ERROR", onError)
      .once("SERVER_ERROR", onError);
    usecase.execute(props);
  });
}
