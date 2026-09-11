 const user = {                                                         
      name: 'Hedy Lamarr',                                                 
      imageUrl: 'https://react.dev/images/docs/scientists/yXOvdOSs.jpg',   
      imageSize: 90,                                                       
    };                                                                     
                                                                           
    export default function Profile() {                                    
      return (                                                             
        <div style={{ textAlign: 'center', margin: '20px 0' }}>            
          <h1>{user.name}</h1>                                             
          <img                                                             
            className="avatar"                                             
            src={user.imageUrl}                                            
            alt={'Photo of ' + user.name}                                  
            style={{                                                       
              width: user.imageSize,
              height: user.imageSize,
              borderRadius: '50%'
            }}
          />
        </div>
      );
    }