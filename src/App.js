import { Routes, Link, Route } from 'react-router-dom'
import { Layout, Space, Typography } from 'antd'
import Navbar from './components/Navbar';
import './App.css'
import Homepage from './components/Homepage';
import CryptoCurrencies from './components/Cryptocurrencies';
import CryptoDetail from './components/CryptoDetails';
import News from './components/News';
function App() {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />}/>
              <Route exact path='/cryptocurrencies' element={<CryptoCurrencies />}/>
              <Route exact path='/crypto/:coinId' element={<CryptoDetail />}/>
              <Route exact path='/news' element={<News />}/>
            </Routes>
          </div>
        </Layout>
        <div className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;