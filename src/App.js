import Card from "./components/Card";

const App = () => {
  const nav = [
    {
      title: "13,234",
      img: "https://1ta100.ir/storage/files/shares/ahowan-616149694d332.jpeg",
    },
    {
      title: "13,234",
      img: "https://1ta100.ir/storage/files/shares/1ta100-639725007add0.jpg",
    },
    {
      title: "13,234",
      img: "https://1ta100.ir/storage/files/shares/ahowan-616149694d332.jpeg",
    },
    {
      title: "13,234",
      img: "https://1ta100.ir/storage/files/shares/1ta100-639725007add0.jpg",
    },
    {
      title: "13,234",
      img: "https://1ta100.ir/storage/files/shares/ahowan-616149694d332.jpeg",
    },
    {
      title: "13,234",
      img: "https://1ta100.ir/storage/files/shares/1ta100-639725007add0.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-9 mt-12">
      {nav.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
};

export default App;
