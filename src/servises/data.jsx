import popugai from "../assets/images/popugai.jpg";
import kanareyka from "../assets/images/kanareyka.jpg";
import tukan from "../assets/images/tukan.jpg";
import kozodoy from "../assets/images/kozodoy.jpg";
import horek from "../assets/images/horek.jpg";
import vydra from "../assets/images/vydra.jpg";

export const products = [
  {
    id: 1,
    name: "Попугай",
    age: "1 месяц",
    price: 15000,
    description: "Бело-синий попугай.",
    availability: true,
    image: popugai,
    category: "bird",
  },
  {
    id: 2, 
    name: "Канарейка",
    age: "3 месяца",
    price: 1400,
    description: "Желтая канарейка.",
    availability: true,
    image: kanareyka,
    category: "bird",
  },
  {
    id: 3,
    name: "Тукан",
    age: "2 месяца",
    price: 90000,
    description: "Белогрудый тукан.",
    availability: true,
    image: tukan,
    category: "bird",
  },
  {
    id: 4,
    name: "Козодой",
    age: "3 недели",
    price: 500000,
    description: "Исполинский козодой.",
    availability: true,
    image: kozodoy,
    category: "bird",
  },
  {
    id: 5,
    name: "Хорек",
    age: "2 месяца",
    price: 20000,
    description: "Домашний хорек.",
    availability: true,
    image: horek,
    category: "small",
  },
  {
    id: 6,
    name: "Выдра",
    age: "2 месяца",
    price: 25000,
    description: "Домашняя выдра.",
    availability: true,
    image: vydra,
    category: "small",
  }
];