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
        'https://dl.airtable.com/.attachmentThumbnails/145f3eaf0a3e3d3b87497dad021a7840/0099e30d',
        'https://dl.airtable.com/.attachmentThumbnails/3d276189f4a40d269e61550745586419/dd3cf01e',
      ],
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
      images: [
        'https://dl.airtable.com/.attachmentThumbnails/bafb3d4d6ddf92688385a9148ba55ac2/b20e0072',
        'https://dl.airtable.com/.attachmentThumbnails/480a86a401bac8f7d4f68d985286bbd9/18268dcb',
      ],
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
        'https://dl.airtable.com/.attachmentThumbnails/c62248404535eac1e026708e0f9fb0a2/b03117de',
        'https://dl.airtable.com/.attachmentThumbnails/1517de99396ac5e1a772275976ce9fb6/15675d2b',
        'https://dl.airtable.com/.attachmentThumbnails/9c603644afb15254889ae550140c2ad5/2a49f58c',
      ],
      description:
        'How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.',
      content:
        'Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.',
      colors: ['red', 'black', 'teal'],
      sizes: ['XL', 'L', 'M', 'XM', 'LX'],
      price: 201,
    }
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