import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Main from './component/main';
import Kabab from './component/category/kabab';
import Vegeterian from './component/category/vegeterian';
import Stew from './component/category/stew';
import FirstLayout from './component/layout_1';
import { useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => { 
    axios.get('https://hapi.pardikiot.com/api/MirrorFoods/GetWithCategoryByLanguageAndMealTime/735e364f-1b29-4622-ad24-aaf44e8be7d0/00%3A00%3A00').then((res) => {
      setData(res.data)
    }).catch(err => console.log(err, 'is error!'))
  
  }, []);
  // console.log(data)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstLayout props={data}/>}>
            <Route exact path='/all' element={<Main props={data} />} />
            <Route path='/kabab' element={<Kabab props={data} />} />
            <Route path='/vegeterian' element={<Vegeterian props={data} />} />
            <Route path='/stew' element={<Stew props={data} />} />
          </Route>
          {/* <Route exact path='/' element={<Main Data={data}/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
