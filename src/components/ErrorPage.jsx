import Header from "./Header";

const styles = {
  height: "70vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

function ErrorPage() {
  return (
    <>
      <Header />
      <main style={styles}>
        <article>
          <h1>An error has occurred!</h1>
          <h2>Page not found! Please check if url entered is correct</h2>
        </article>
      </main>
    </>
  );
}

export default ErrorPage;
