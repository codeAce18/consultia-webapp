import { LoginForm } from "@/app/components/LoginForm";


const loginform = () => {
    return (
        <div style={{
            backgroundColor: '#5B52B6',
            minHeight: '100vh', // Ensures it covers the full viewport height
            minWidth: '100vw', // Ensures it covers the full viewport width
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div>
            
                <LoginForm />
         
            
            </div>
        </div>
        
    )
}


export default loginform;