export default function Home() {
  const name = "Kyeong";
  const link = "https://google.com";
  return (
    <div>
      <h1 className="title" style={{fontSize: "40px"}}>
        Hello! 🏁
      </h1>
      <p className="title-sub">{`by ${name} Zeeyoon`}</p>
      <a href={link}>구글링크</a>
    </div>
  );
}
