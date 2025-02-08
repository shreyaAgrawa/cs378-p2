import './App.css';
import MenuItem from './components/MenuItem';

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import './App.css'
import HeaderItem from './components/HeaderItem';
// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const headerInfo = [
  {
    imageName: '/images/yoshi.png',
    decorativeFont: 'Delicious Traditional Dishes to Feed the Soul',
    secondHeader: 'The Best Japanese Restaurant in Austin!'
  }
]
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: '/images/gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: '/images/sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle\n soup',
    imageName: '/images/ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green\n tea cake',
    imageName: '/images/matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: '/images/mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered\n chicken',
    imageName: '/images/yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus\n balls',
    imageName: '/images/takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: '/images/sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory\n pancake',
    imageName: '/images/okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry\n with fried pork',
    imageName: '/images/katsu-curry.png',
    price: 9.99,
  }
];


function App() {
  return (
    <>
        <HeaderItem
        name={"Yoshi"}
        logo={headerInfo[0].imageName}
        restaurant={headerInfo[0].decorativeFont}
        description={headerInfo[0].secondHeader}
        />

      <div className="menu-center">
        <div className="menu-items">
          {menuItems.map((item) => (
            <MenuItem 
              key={item.id} 
              title={item.title} 
              description={item.description} 
              price={item.price} 
              imageName={item.imageName} 
            />
          ))}
        </div>
      </div>

      </>
  );
}

export default App;
