import {Avatar, Typography, Menu, Button} from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import cryptoIcon from '../images/cryptologo.png'
import { useEffect, useState } from 'react'

const Navbar = () => {
    const [screenSize, setScreenSize] = useState(null)
    const [menu, setMenu] = useState(false)
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        if(screenSize > 500) {
            setMenu(true)
        }
        else {
            setMenu(false)
        }
    }, [screenSize])
    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={cryptoIcon} size='large'/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setMenu((prevState) => {
                    return !prevState
                })}>
                    <MenuOutlined />
                </Button>
            </div>
            {menu && (
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}
            
        </div>
    )
}
export default Navbar