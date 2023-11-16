import { Link, NavLink } from "react-router-dom"
import Logo from '../assests/renati.png'

export const Header = () => {
  return (
   
 <>
   <header>
          <div className="headerpart"> Renati </div>
   </header>

<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} class="h-8" alt={Logo} />
            <span className="self-center text-2xl font-semibold whitespace-nowrap company-name">Steel and Aluminum Business</span>
        </Link>
    </div>
</nav>
<nav>
  <div class="flex items-center justify-center space-x-10 rtl:space-x-reverse">
    <NavLink to="/" class="text-sm text-gray-500 dark:text-white hover:underline">
      🏠 Home
    </NavLink>
    <NavLink to="/cart" class="text-sm text-blue-600 dark:text-blue-500 hover:underline">
      🛒 Cart
    </NavLink>
  </div>
</nav>

 
             

 
 </>
        
       

  )
}


