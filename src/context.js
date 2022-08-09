import React,{useState,useContext,createContext} from "react";

const AppContext = createContext()
const AppProvider =({children}) =>{
 const[showNav,setShowNav]= useState(false)
 const[indexSlide,setIndexSlide]= useState(0)
  const [index, setIndex] = useState(0);

 
 const openNav = () =>{
  setShowNav(true)
 }
 const closeNav = () => {
  setShowNav(false)
 }
 const [slide, setSlide] = useState([
   {
     id: 1,
     image: './images/banner-1.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
   {
     id: 2,
     image: './images/banner-2.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
   {
     id: 3,
     image: './images/tenu3 1.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
   {
     id: 4,
     image: './images/slide-1 1.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
   {
     id: 5,
     image: './images/tenu5 1.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
   {
     id: 6,
     image: './images/blouse1 1.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
   {
     id: 7,
     image: './images/blouse2 1.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
   {
     id: 8,
     image: './images/blouse3 1.png',
     name: 'test 1',
     title:
       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus minima quo impedit molestiae et totam.',
   },
 ]);
 const [boutique, setBoutique] = useState([
   {
     id: '1',
     name: 'boubou tradionnel',
     images: [
      'images/boutique1 1.png',
      'images/boutique2 1.png'],
     description:
       'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 101,
   },
   {
     id: '2',
     name: 'boubou tradionnel',
     images: ['images/boutique3 1.png', 'images/boutique4 1.png'],
     description:
       'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 501,
   },
   {
     id: '3',
     name: 'boubou tradionnel',
     images: [
       'images/boutique5 1.png',
       'images/boutique6 1.png',
       'images/boutique7 1.png',
     ],
     description:
       'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
     content:
       'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
     colors: ['red', 'black', 'teal'],
     sizes: ['XL', 'L', 'M', 'XM', 'LX'],
     price: 201,
   },
 ]);
 return<AppContext.Provider value={{
  setShowNav,showNav,openNav,closeNav,slide,setSlide,
  indexSlide,setIndexSlide,boutique,setBoutique,
  index,setIndex
 }}>
{children}
 </AppContext.Provider>
}
export const useGlobalContext = () =>{
 return useContext(AppContext)
}
export {AppContext,AppProvider}