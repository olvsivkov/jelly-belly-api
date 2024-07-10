import { BeansData } from "../../interfaces/interfaces";

function BeanList({ beans }: { beans: BeansData[] }) {
  return (
    <ul>
      {beans.map((bean) => (
        <li key={bean.beanId}>{bean.flavorName}</li>
      ))}
    </ul>
  );
}

export default BeanList