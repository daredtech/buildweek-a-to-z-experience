import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';

const AlternativeMenu = () =>{
    return(
        <div>
            <Menu>
            <Image src="https://i.ibb.co/kc2Lq8X/atoz.png" size='tiny' width='200px'/>
            
            <Menu.Menu className='menu-tabs' position='right'>
            <Menu.Item name='Host an experience'/>
            <Menu.Item name='Sign up'/>
            <Menu.Item name='Log in'/>
            </Menu.Menu>
            </Menu>

        
        </div>



    )
}

export default AlternativeMenu;

 
